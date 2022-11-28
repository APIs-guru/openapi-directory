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
import { OverrideInlineSource } from "./overrideinlinesource";
export var ImportAdminOverridesRequestForceOnlyEnum;
(function (ImportAdminOverridesRequestForceOnlyEnum) {
    ImportAdminOverridesRequestForceOnlyEnum["QuotaSafetyCheckUnspecified"] = "QUOTA_SAFETY_CHECK_UNSPECIFIED";
    ImportAdminOverridesRequestForceOnlyEnum["LimitDecreaseBelowUsage"] = "LIMIT_DECREASE_BELOW_USAGE";
    ImportAdminOverridesRequestForceOnlyEnum["LimitDecreasePercentageTooHigh"] = "LIMIT_DECREASE_PERCENTAGE_TOO_HIGH";
})(ImportAdminOverridesRequestForceOnlyEnum || (ImportAdminOverridesRequestForceOnlyEnum = {}));
// ImportAdminOverridesRequest
/**
 * Request message for ImportAdminOverrides
**/
var ImportAdminOverridesRequest = /** @class */ (function (_super) {
    __extends(ImportAdminOverridesRequest, _super);
    function ImportAdminOverridesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=force" }),
        __metadata("design:type", Boolean)
    ], ImportAdminOverridesRequest.prototype, "force", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=forceOnly" }),
        __metadata("design:type", Array)
    ], ImportAdminOverridesRequest.prototype, "forceOnly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inlineSource" }),
        __metadata("design:type", OverrideInlineSource)
    ], ImportAdminOverridesRequest.prototype, "inlineSource", void 0);
    return ImportAdminOverridesRequest;
}(SpeakeasyBase));
export { ImportAdminOverridesRequest };
