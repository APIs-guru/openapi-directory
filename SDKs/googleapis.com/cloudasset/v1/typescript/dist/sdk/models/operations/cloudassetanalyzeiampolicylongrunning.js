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
import * as shared from "../shared";
var CloudassetAnalyzeIamPolicyLongrunningPathParams = /** @class */ (function (_super) {
    __extends(CloudassetAnalyzeIamPolicyLongrunningPathParams, _super);
    function CloudassetAnalyzeIamPolicyLongrunningPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=scope" }),
        __metadata("design:type", String)
    ], CloudassetAnalyzeIamPolicyLongrunningPathParams.prototype, "scope", void 0);
    return CloudassetAnalyzeIamPolicyLongrunningPathParams;
}(SpeakeasyBase));
export { CloudassetAnalyzeIamPolicyLongrunningPathParams };
var CloudassetAnalyzeIamPolicyLongrunningQueryParams = /** @class */ (function (_super) {
    __extends(CloudassetAnalyzeIamPolicyLongrunningQueryParams, _super);
    function CloudassetAnalyzeIamPolicyLongrunningQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudassetAnalyzeIamPolicyLongrunningQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudassetAnalyzeIamPolicyLongrunningQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudassetAnalyzeIamPolicyLongrunningQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudassetAnalyzeIamPolicyLongrunningQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudassetAnalyzeIamPolicyLongrunningQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudassetAnalyzeIamPolicyLongrunningQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudassetAnalyzeIamPolicyLongrunningQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudassetAnalyzeIamPolicyLongrunningQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudassetAnalyzeIamPolicyLongrunningQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudassetAnalyzeIamPolicyLongrunningQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudassetAnalyzeIamPolicyLongrunningQueryParams.prototype, "uploadProtocol", void 0);
    return CloudassetAnalyzeIamPolicyLongrunningQueryParams;
}(SpeakeasyBase));
export { CloudassetAnalyzeIamPolicyLongrunningQueryParams };
var CloudassetAnalyzeIamPolicyLongrunningSecurity = /** @class */ (function (_super) {
    __extends(CloudassetAnalyzeIamPolicyLongrunningSecurity, _super);
    function CloudassetAnalyzeIamPolicyLongrunningSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudassetAnalyzeIamPolicyLongrunningSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudassetAnalyzeIamPolicyLongrunningSecurity.prototype, "oauth2c", void 0);
    return CloudassetAnalyzeIamPolicyLongrunningSecurity;
}(SpeakeasyBase));
export { CloudassetAnalyzeIamPolicyLongrunningSecurity };
var CloudassetAnalyzeIamPolicyLongrunningRequest = /** @class */ (function (_super) {
    __extends(CloudassetAnalyzeIamPolicyLongrunningRequest, _super);
    function CloudassetAnalyzeIamPolicyLongrunningRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudassetAnalyzeIamPolicyLongrunningPathParams)
    ], CloudassetAnalyzeIamPolicyLongrunningRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudassetAnalyzeIamPolicyLongrunningQueryParams)
    ], CloudassetAnalyzeIamPolicyLongrunningRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.AnalyzeIamPolicyLongrunningRequest)
    ], CloudassetAnalyzeIamPolicyLongrunningRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudassetAnalyzeIamPolicyLongrunningSecurity)
    ], CloudassetAnalyzeIamPolicyLongrunningRequest.prototype, "security", void 0);
    return CloudassetAnalyzeIamPolicyLongrunningRequest;
}(SpeakeasyBase));
export { CloudassetAnalyzeIamPolicyLongrunningRequest };
var CloudassetAnalyzeIamPolicyLongrunningResponse = /** @class */ (function (_super) {
    __extends(CloudassetAnalyzeIamPolicyLongrunningResponse, _super);
    function CloudassetAnalyzeIamPolicyLongrunningResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudassetAnalyzeIamPolicyLongrunningResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], CloudassetAnalyzeIamPolicyLongrunningResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudassetAnalyzeIamPolicyLongrunningResponse.prototype, "statusCode", void 0);
    return CloudassetAnalyzeIamPolicyLongrunningResponse;
}(SpeakeasyBase));
export { CloudassetAnalyzeIamPolicyLongrunningResponse };
