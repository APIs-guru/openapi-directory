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
import { EnterpriseCrmEventbusProtoValueType } from "./enterprisecrmeventbusprotovaluetype";
import { EnterpriseCrmEventbusProtoLogSettings } from "./enterprisecrmeventbusprotologsettings";
export var EnterpriseCrmEventbusProtoAttributesDataTypeEnum;
(function (EnterpriseCrmEventbusProtoAttributesDataTypeEnum) {
    EnterpriseCrmEventbusProtoAttributesDataTypeEnum["DataTypeUnspecified"] = "DATA_TYPE_UNSPECIFIED";
    EnterpriseCrmEventbusProtoAttributesDataTypeEnum["Email"] = "EMAIL";
    EnterpriseCrmEventbusProtoAttributesDataTypeEnum["Url"] = "URL";
    EnterpriseCrmEventbusProtoAttributesDataTypeEnum["Currency"] = "CURRENCY";
    EnterpriseCrmEventbusProtoAttributesDataTypeEnum["Timestamp"] = "TIMESTAMP";
    EnterpriseCrmEventbusProtoAttributesDataTypeEnum["DomainName"] = "DOMAIN_NAME";
})(EnterpriseCrmEventbusProtoAttributesDataTypeEnum || (EnterpriseCrmEventbusProtoAttributesDataTypeEnum = {}));
export var EnterpriseCrmEventbusProtoAttributesSearchableEnum;
(function (EnterpriseCrmEventbusProtoAttributesSearchableEnum) {
    EnterpriseCrmEventbusProtoAttributesSearchableEnum["Unspecified"] = "UNSPECIFIED";
    EnterpriseCrmEventbusProtoAttributesSearchableEnum["Yes"] = "YES";
    EnterpriseCrmEventbusProtoAttributesSearchableEnum["No"] = "NO";
})(EnterpriseCrmEventbusProtoAttributesSearchableEnum || (EnterpriseCrmEventbusProtoAttributesSearchableEnum = {}));
// EnterpriseCrmEventbusProtoAttributes
/**
 * Attributes are additional options that can be associated with each event property. For more information, see go/integration-platform/event_bus/attributes_registry.md. Next available: 8
**/
var EnterpriseCrmEventbusProtoAttributes = /** @class */ (function (_super) {
    __extends(EnterpriseCrmEventbusProtoAttributes, _super);
    function EnterpriseCrmEventbusProtoAttributes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataType" }),
        __metadata("design:type", String)
    ], EnterpriseCrmEventbusProtoAttributes.prototype, "dataType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultValue" }),
        __metadata("design:type", EnterpriseCrmEventbusProtoValueType)
    ], EnterpriseCrmEventbusProtoAttributes.prototype, "defaultValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isRequired" }),
        __metadata("design:type", Boolean)
    ], EnterpriseCrmEventbusProtoAttributes.prototype, "isRequired", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isSearchable" }),
        __metadata("design:type", Boolean)
    ], EnterpriseCrmEventbusProtoAttributes.prototype, "isSearchable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=logSettings" }),
        __metadata("design:type", EnterpriseCrmEventbusProtoLogSettings)
    ], EnterpriseCrmEventbusProtoAttributes.prototype, "logSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=searchable" }),
        __metadata("design:type", String)
    ], EnterpriseCrmEventbusProtoAttributes.prototype, "searchable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taskVisibility" }),
        __metadata("design:type", Array)
    ], EnterpriseCrmEventbusProtoAttributes.prototype, "taskVisibility", void 0);
    return EnterpriseCrmEventbusProtoAttributes;
}(SpeakeasyBase));
export { EnterpriseCrmEventbusProtoAttributes };
