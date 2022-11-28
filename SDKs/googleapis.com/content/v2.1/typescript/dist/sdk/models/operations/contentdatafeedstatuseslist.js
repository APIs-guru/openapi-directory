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
var ContentDatafeedstatusesListPathParams = /** @class */ (function (_super) {
    __extends(ContentDatafeedstatusesListPathParams, _super);
    function ContentDatafeedstatusesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=merchantId" }),
        __metadata("design:type", String)
    ], ContentDatafeedstatusesListPathParams.prototype, "merchantId", void 0);
    return ContentDatafeedstatusesListPathParams;
}(SpeakeasyBase));
export { ContentDatafeedstatusesListPathParams };
var ContentDatafeedstatusesListQueryParams = /** @class */ (function (_super) {
    __extends(ContentDatafeedstatusesListQueryParams, _super);
    function ContentDatafeedstatusesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ContentDatafeedstatusesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ContentDatafeedstatusesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ContentDatafeedstatusesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ContentDatafeedstatusesListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ContentDatafeedstatusesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ContentDatafeedstatusesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], ContentDatafeedstatusesListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ContentDatafeedstatusesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], ContentDatafeedstatusesListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ContentDatafeedstatusesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ContentDatafeedstatusesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ContentDatafeedstatusesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ContentDatafeedstatusesListQueryParams.prototype, "uploadProtocol", void 0);
    return ContentDatafeedstatusesListQueryParams;
}(SpeakeasyBase));
export { ContentDatafeedstatusesListQueryParams };
var ContentDatafeedstatusesListSecurity = /** @class */ (function (_super) {
    __extends(ContentDatafeedstatusesListSecurity, _super);
    function ContentDatafeedstatusesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ContentDatafeedstatusesListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ContentDatafeedstatusesListSecurity.prototype, "oauth2c", void 0);
    return ContentDatafeedstatusesListSecurity;
}(SpeakeasyBase));
export { ContentDatafeedstatusesListSecurity };
var ContentDatafeedstatusesListRequest = /** @class */ (function (_super) {
    __extends(ContentDatafeedstatusesListRequest, _super);
    function ContentDatafeedstatusesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentDatafeedstatusesListPathParams)
    ], ContentDatafeedstatusesListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentDatafeedstatusesListQueryParams)
    ], ContentDatafeedstatusesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentDatafeedstatusesListSecurity)
    ], ContentDatafeedstatusesListRequest.prototype, "security", void 0);
    return ContentDatafeedstatusesListRequest;
}(SpeakeasyBase));
export { ContentDatafeedstatusesListRequest };
var ContentDatafeedstatusesListResponse = /** @class */ (function (_super) {
    __extends(ContentDatafeedstatusesListResponse, _super);
    function ContentDatafeedstatusesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ContentDatafeedstatusesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DatafeedstatusesListResponse)
    ], ContentDatafeedstatusesListResponse.prototype, "datafeedstatusesListResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ContentDatafeedstatusesListResponse.prototype, "statusCode", void 0);
    return ContentDatafeedstatusesListResponse;
}(SpeakeasyBase));
export { ContentDatafeedstatusesListResponse };
