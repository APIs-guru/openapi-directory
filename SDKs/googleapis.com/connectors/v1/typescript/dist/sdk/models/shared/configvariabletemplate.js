var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AuthorizationCodeLink } from "./authorizationcodelink";
import { EnumOption } from "./enumoption";
import { RoleGrant } from "./rolegrant";
export var ConfigVariableTemplateStateEnum;
(function (ConfigVariableTemplateStateEnum) {
    ConfigVariableTemplateStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    ConfigVariableTemplateStateEnum["Active"] = "ACTIVE";
    ConfigVariableTemplateStateEnum["Deprecated"] = "DEPRECATED";
})(ConfigVariableTemplateStateEnum || (ConfigVariableTemplateStateEnum = {}));
export var ConfigVariableTemplateValueTypeEnum;
(function (ConfigVariableTemplateValueTypeEnum) {
    ConfigVariableTemplateValueTypeEnum["ValueTypeUnspecified"] = "VALUE_TYPE_UNSPECIFIED";
    ConfigVariableTemplateValueTypeEnum["String"] = "STRING";
    ConfigVariableTemplateValueTypeEnum["Int"] = "INT";
    ConfigVariableTemplateValueTypeEnum["Bool"] = "BOOL";
    ConfigVariableTemplateValueTypeEnum["Secret"] = "SECRET";
    ConfigVariableTemplateValueTypeEnum["Enum"] = "ENUM";
    ConfigVariableTemplateValueTypeEnum["AuthorizationCode"] = "AUTHORIZATION_CODE";
})(ConfigVariableTemplateValueTypeEnum || (ConfigVariableTemplateValueTypeEnum = {}));
// ConfigVariableTemplate
/**
 * ConfigVariableTemplate provides metadata about a `ConfigVariable` that is used in a Connection.
**/
var ConfigVariableTemplate = /** @class */ (function (_super) {
    __extends(ConfigVariableTemplate, _super);
    function ConfigVariableTemplate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authorizationCodeLink" }),
        __metadata("design:type", AuthorizationCodeLink)
    ], ConfigVariableTemplate.prototype, "authorizationCodeLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], ConfigVariableTemplate.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], ConfigVariableTemplate.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enumOptions", elemType: EnumOption }),
        __metadata("design:type", Array)
    ], ConfigVariableTemplate.prototype, "enumOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ConfigVariableTemplate.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=required" }),
        __metadata("design:type", Boolean)
    ], ConfigVariableTemplate.prototype, "required", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=roleGrant" }),
        __metadata("design:type", RoleGrant)
    ], ConfigVariableTemplate.prototype, "roleGrant", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], ConfigVariableTemplate.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=validationRegex" }),
        __metadata("design:type", String)
    ], ConfigVariableTemplate.prototype, "validationRegex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=valueType" }),
        __metadata("design:type", String)
    ], ConfigVariableTemplate.prototype, "valueType", void 0);
    return ConfigVariableTemplate;
}(SpeakeasyBase));
export { ConfigVariableTemplate };
