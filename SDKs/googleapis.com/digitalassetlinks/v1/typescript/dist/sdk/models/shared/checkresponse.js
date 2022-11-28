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
export var CheckResponseErrorCodeEnum;
(function (CheckResponseErrorCodeEnum) {
    CheckResponseErrorCodeEnum["ErrorCodeUnspecified"] = "ERROR_CODE_UNSPECIFIED";
    CheckResponseErrorCodeEnum["ErrorCodeInvalidQuery"] = "ERROR_CODE_INVALID_QUERY";
    CheckResponseErrorCodeEnum["ErrorCodeFetchError"] = "ERROR_CODE_FETCH_ERROR";
    CheckResponseErrorCodeEnum["ErrorCodeFailedSslValidation"] = "ERROR_CODE_FAILED_SSL_VALIDATION";
    CheckResponseErrorCodeEnum["ErrorCodeRedirect"] = "ERROR_CODE_REDIRECT";
    CheckResponseErrorCodeEnum["ErrorCodeTooLarge"] = "ERROR_CODE_TOO_LARGE";
    CheckResponseErrorCodeEnum["ErrorCodeMalformedHttpResponse"] = "ERROR_CODE_MALFORMED_HTTP_RESPONSE";
    CheckResponseErrorCodeEnum["ErrorCodeWrongContentType"] = "ERROR_CODE_WRONG_CONTENT_TYPE";
    CheckResponseErrorCodeEnum["ErrorCodeMalformedContent"] = "ERROR_CODE_MALFORMED_CONTENT";
    CheckResponseErrorCodeEnum["ErrorCodeSecureAssetIncludesInsecure"] = "ERROR_CODE_SECURE_ASSET_INCLUDES_INSECURE";
    CheckResponseErrorCodeEnum["ErrorCodeFetchBudgetExhausted"] = "ERROR_CODE_FETCH_BUDGET_EXHAUSTED";
})(CheckResponseErrorCodeEnum || (CheckResponseErrorCodeEnum = {}));
// CheckResponse
/**
 * Response message for the CheckAssetLinks call.
**/
var CheckResponse = /** @class */ (function (_super) {
    __extends(CheckResponse, _super);
    function CheckResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=debugString" }),
        __metadata("design:type", String)
    ], CheckResponse.prototype, "debugString", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorCode" }),
        __metadata("design:type", Array)
    ], CheckResponse.prototype, "errorCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=linked" }),
        __metadata("design:type", Boolean)
    ], CheckResponse.prototype, "linked", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxAge" }),
        __metadata("design:type", String)
    ], CheckResponse.prototype, "maxAge", void 0);
    return CheckResponse;
}(SpeakeasyBase));
export { CheckResponse };
