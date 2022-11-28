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
export var BackendRulePathTranslationEnum;
(function (BackendRulePathTranslationEnum) {
    BackendRulePathTranslationEnum["PathTranslationUnspecified"] = "PATH_TRANSLATION_UNSPECIFIED";
    BackendRulePathTranslationEnum["ConstantAddress"] = "CONSTANT_ADDRESS";
    BackendRulePathTranslationEnum["AppendPathToAddress"] = "APPEND_PATH_TO_ADDRESS";
})(BackendRulePathTranslationEnum || (BackendRulePathTranslationEnum = {}));
// BackendRule
/**
 * A backend rule provides configuration for an individual API element.
**/
var BackendRule = /** @class */ (function (_super) {
    __extends(BackendRule, _super);
    function BackendRule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=address" }),
        __metadata("design:type", String)
    ], BackendRule.prototype, "address", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deadline" }),
        __metadata("design:type", Number)
    ], BackendRule.prototype, "deadline", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disableAuth" }),
        __metadata("design:type", Boolean)
    ], BackendRule.prototype, "disableAuth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=jwtAudience" }),
        __metadata("design:type", String)
    ], BackendRule.prototype, "jwtAudience", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=operationDeadline" }),
        __metadata("design:type", Number)
    ], BackendRule.prototype, "operationDeadline", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pathTranslation" }),
        __metadata("design:type", String)
    ], BackendRule.prototype, "pathTranslation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=protocol" }),
        __metadata("design:type", String)
    ], BackendRule.prototype, "protocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=selector" }),
        __metadata("design:type", String)
    ], BackendRule.prototype, "selector", void 0);
    return BackendRule;
}(SpeakeasyBase));
export { BackendRule };
