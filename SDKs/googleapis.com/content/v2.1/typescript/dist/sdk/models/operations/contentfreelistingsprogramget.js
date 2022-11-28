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
var ContentFreelistingsprogramGetPathParams = /** @class */ (function (_super) {
    __extends(ContentFreelistingsprogramGetPathParams, _super);
    function ContentFreelistingsprogramGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=merchantId" }),
        __metadata("design:type", String)
    ], ContentFreelistingsprogramGetPathParams.prototype, "merchantId", void 0);
    return ContentFreelistingsprogramGetPathParams;
}(SpeakeasyBase));
export { ContentFreelistingsprogramGetPathParams };
var ContentFreelistingsprogramGetQueryParams = /** @class */ (function (_super) {
    __extends(ContentFreelistingsprogramGetQueryParams, _super);
    function ContentFreelistingsprogramGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ContentFreelistingsprogramGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ContentFreelistingsprogramGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ContentFreelistingsprogramGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ContentFreelistingsprogramGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ContentFreelistingsprogramGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ContentFreelistingsprogramGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ContentFreelistingsprogramGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ContentFreelistingsprogramGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ContentFreelistingsprogramGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ContentFreelistingsprogramGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ContentFreelistingsprogramGetQueryParams.prototype, "uploadProtocol", void 0);
    return ContentFreelistingsprogramGetQueryParams;
}(SpeakeasyBase));
export { ContentFreelistingsprogramGetQueryParams };
var ContentFreelistingsprogramGetSecurity = /** @class */ (function (_super) {
    __extends(ContentFreelistingsprogramGetSecurity, _super);
    function ContentFreelistingsprogramGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ContentFreelistingsprogramGetSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ContentFreelistingsprogramGetSecurity.prototype, "oauth2c", void 0);
    return ContentFreelistingsprogramGetSecurity;
}(SpeakeasyBase));
export { ContentFreelistingsprogramGetSecurity };
var ContentFreelistingsprogramGetRequest = /** @class */ (function (_super) {
    __extends(ContentFreelistingsprogramGetRequest, _super);
    function ContentFreelistingsprogramGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentFreelistingsprogramGetPathParams)
    ], ContentFreelistingsprogramGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentFreelistingsprogramGetQueryParams)
    ], ContentFreelistingsprogramGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentFreelistingsprogramGetSecurity)
    ], ContentFreelistingsprogramGetRequest.prototype, "security", void 0);
    return ContentFreelistingsprogramGetRequest;
}(SpeakeasyBase));
export { ContentFreelistingsprogramGetRequest };
var ContentFreelistingsprogramGetResponse = /** @class */ (function (_super) {
    __extends(ContentFreelistingsprogramGetResponse, _super);
    function ContentFreelistingsprogramGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ContentFreelistingsprogramGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.FreeListingsProgramStatus)
    ], ContentFreelistingsprogramGetResponse.prototype, "freeListingsProgramStatus", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ContentFreelistingsprogramGetResponse.prototype, "statusCode", void 0);
    return ContentFreelistingsprogramGetResponse;
}(SpeakeasyBase));
export { ContentFreelistingsprogramGetResponse };
