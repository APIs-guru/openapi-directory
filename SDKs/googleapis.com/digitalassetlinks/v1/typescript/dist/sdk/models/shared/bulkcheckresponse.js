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
import { CheckResponse } from "./checkresponse";
export var BulkCheckResponseBulkErrorCodeEnum;
(function (BulkCheckResponseBulkErrorCodeEnum) {
    BulkCheckResponseBulkErrorCodeEnum["ErrorCodeUnspecified"] = "ERROR_CODE_UNSPECIFIED";
    BulkCheckResponseBulkErrorCodeEnum["ErrorCodeInvalidQuery"] = "ERROR_CODE_INVALID_QUERY";
    BulkCheckResponseBulkErrorCodeEnum["ErrorCodeFetchError"] = "ERROR_CODE_FETCH_ERROR";
    BulkCheckResponseBulkErrorCodeEnum["ErrorCodeFailedSslValidation"] = "ERROR_CODE_FAILED_SSL_VALIDATION";
    BulkCheckResponseBulkErrorCodeEnum["ErrorCodeRedirect"] = "ERROR_CODE_REDIRECT";
    BulkCheckResponseBulkErrorCodeEnum["ErrorCodeTooLarge"] = "ERROR_CODE_TOO_LARGE";
    BulkCheckResponseBulkErrorCodeEnum["ErrorCodeMalformedHttpResponse"] = "ERROR_CODE_MALFORMED_HTTP_RESPONSE";
    BulkCheckResponseBulkErrorCodeEnum["ErrorCodeWrongContentType"] = "ERROR_CODE_WRONG_CONTENT_TYPE";
    BulkCheckResponseBulkErrorCodeEnum["ErrorCodeMalformedContent"] = "ERROR_CODE_MALFORMED_CONTENT";
    BulkCheckResponseBulkErrorCodeEnum["ErrorCodeSecureAssetIncludesInsecure"] = "ERROR_CODE_SECURE_ASSET_INCLUDES_INSECURE";
    BulkCheckResponseBulkErrorCodeEnum["ErrorCodeFetchBudgetExhausted"] = "ERROR_CODE_FETCH_BUDGET_EXHAUSTED";
})(BulkCheckResponseBulkErrorCodeEnum || (BulkCheckResponseBulkErrorCodeEnum = {}));
// BulkCheckResponse
/**
 * Response for BulkCheck call. Results are sent in a list in the same order in which they were sent. Individual check errors are described in the appropriate check_results entry. If the entire call fails, the response will include a bulk_error_code field describing the error.
**/
var BulkCheckResponse = /** @class */ (function (_super) {
    __extends(BulkCheckResponse, _super);
    function BulkCheckResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bulkErrorCode" }),
        __metadata("design:type", String)
    ], BulkCheckResponse.prototype, "bulkErrorCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=checkResults", elemType: CheckResponse }),
        __metadata("design:type", Array)
    ], BulkCheckResponse.prototype, "checkResults", void 0);
    return BulkCheckResponse;
}(SpeakeasyBase));
export { BulkCheckResponse };
