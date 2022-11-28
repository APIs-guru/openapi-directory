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
import { Statement } from "./statement";
export var ListResponseErrorCodeEnum;
(function (ListResponseErrorCodeEnum) {
    ListResponseErrorCodeEnum["ErrorCodeUnspecified"] = "ERROR_CODE_UNSPECIFIED";
    ListResponseErrorCodeEnum["ErrorCodeInvalidQuery"] = "ERROR_CODE_INVALID_QUERY";
    ListResponseErrorCodeEnum["ErrorCodeFetchError"] = "ERROR_CODE_FETCH_ERROR";
    ListResponseErrorCodeEnum["ErrorCodeFailedSslValidation"] = "ERROR_CODE_FAILED_SSL_VALIDATION";
    ListResponseErrorCodeEnum["ErrorCodeRedirect"] = "ERROR_CODE_REDIRECT";
    ListResponseErrorCodeEnum["ErrorCodeTooLarge"] = "ERROR_CODE_TOO_LARGE";
    ListResponseErrorCodeEnum["ErrorCodeMalformedHttpResponse"] = "ERROR_CODE_MALFORMED_HTTP_RESPONSE";
    ListResponseErrorCodeEnum["ErrorCodeWrongContentType"] = "ERROR_CODE_WRONG_CONTENT_TYPE";
    ListResponseErrorCodeEnum["ErrorCodeMalformedContent"] = "ERROR_CODE_MALFORMED_CONTENT";
    ListResponseErrorCodeEnum["ErrorCodeSecureAssetIncludesInsecure"] = "ERROR_CODE_SECURE_ASSET_INCLUDES_INSECURE";
    ListResponseErrorCodeEnum["ErrorCodeFetchBudgetExhausted"] = "ERROR_CODE_FETCH_BUDGET_EXHAUSTED";
})(ListResponseErrorCodeEnum || (ListResponseErrorCodeEnum = {}));
// ListResponse
/**
 * Response message for the List call.
**/
var ListResponse = /** @class */ (function (_super) {
    __extends(ListResponse, _super);
    function ListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=debugString" }),
        __metadata("design:type", String)
    ], ListResponse.prototype, "debugString", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorCode" }),
        __metadata("design:type", Array)
    ], ListResponse.prototype, "errorCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxAge" }),
        __metadata("design:type", String)
    ], ListResponse.prototype, "maxAge", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=statements", elemType: Statement }),
        __metadata("design:type", Array)
    ], ListResponse.prototype, "statements", void 0);
    return ListResponse;
}(SpeakeasyBase));
export { ListResponse };
