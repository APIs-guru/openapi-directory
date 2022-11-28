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
var CloudsearchQuerySuggestQueryParams = /** @class */ (function (_super) {
    __extends(CloudsearchQuerySuggestQueryParams, _super);
    function CloudsearchQuerySuggestQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudsearchQuerySuggestQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudsearchQuerySuggestQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudsearchQuerySuggestQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudsearchQuerySuggestQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudsearchQuerySuggestQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudsearchQuerySuggestQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudsearchQuerySuggestQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudsearchQuerySuggestQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudsearchQuerySuggestQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudsearchQuerySuggestQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudsearchQuerySuggestQueryParams.prototype, "uploadProtocol", void 0);
    return CloudsearchQuerySuggestQueryParams;
}(SpeakeasyBase));
export { CloudsearchQuerySuggestQueryParams };
var CloudsearchQuerySuggestSecurityOption1 = /** @class */ (function (_super) {
    __extends(CloudsearchQuerySuggestSecurityOption1, _super);
    function CloudsearchQuerySuggestSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudsearchQuerySuggestSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudsearchQuerySuggestSecurityOption1.prototype, "oauth2c", void 0);
    return CloudsearchQuerySuggestSecurityOption1;
}(SpeakeasyBase));
export { CloudsearchQuerySuggestSecurityOption1 };
var CloudsearchQuerySuggestSecurityOption2 = /** @class */ (function (_super) {
    __extends(CloudsearchQuerySuggestSecurityOption2, _super);
    function CloudsearchQuerySuggestSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudsearchQuerySuggestSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudsearchQuerySuggestSecurityOption2.prototype, "oauth2c", void 0);
    return CloudsearchQuerySuggestSecurityOption2;
}(SpeakeasyBase));
export { CloudsearchQuerySuggestSecurityOption2 };
var CloudsearchQuerySuggestSecurity = /** @class */ (function (_super) {
    __extends(CloudsearchQuerySuggestSecurity, _super);
    function CloudsearchQuerySuggestSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudsearchQuerySuggestSecurityOption1)
    ], CloudsearchQuerySuggestSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudsearchQuerySuggestSecurityOption2)
    ], CloudsearchQuerySuggestSecurity.prototype, "option2", void 0);
    return CloudsearchQuerySuggestSecurity;
}(SpeakeasyBase));
export { CloudsearchQuerySuggestSecurity };
var CloudsearchQuerySuggestRequest = /** @class */ (function (_super) {
    __extends(CloudsearchQuerySuggestRequest, _super);
    function CloudsearchQuerySuggestRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudsearchQuerySuggestQueryParams)
    ], CloudsearchQuerySuggestRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.SuggestRequest)
    ], CloudsearchQuerySuggestRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudsearchQuerySuggestSecurity)
    ], CloudsearchQuerySuggestRequest.prototype, "security", void 0);
    return CloudsearchQuerySuggestRequest;
}(SpeakeasyBase));
export { CloudsearchQuerySuggestRequest };
var CloudsearchQuerySuggestResponse = /** @class */ (function (_super) {
    __extends(CloudsearchQuerySuggestResponse, _super);
    function CloudsearchQuerySuggestResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudsearchQuerySuggestResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudsearchQuerySuggestResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SuggestResponse)
    ], CloudsearchQuerySuggestResponse.prototype, "suggestResponse", void 0);
    return CloudsearchQuerySuggestResponse;
}(SpeakeasyBase));
export { CloudsearchQuerySuggestResponse };
