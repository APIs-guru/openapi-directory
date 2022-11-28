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
var LibraryagentShelvesBooksListPathParams = /** @class */ (function (_super) {
    __extends(LibraryagentShelvesBooksListPathParams, _super);
    function LibraryagentShelvesBooksListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], LibraryagentShelvesBooksListPathParams.prototype, "parent", void 0);
    return LibraryagentShelvesBooksListPathParams;
}(SpeakeasyBase));
export { LibraryagentShelvesBooksListPathParams };
var LibraryagentShelvesBooksListQueryParams = /** @class */ (function (_super) {
    __extends(LibraryagentShelvesBooksListQueryParams, _super);
    function LibraryagentShelvesBooksListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], LibraryagentShelvesBooksListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], LibraryagentShelvesBooksListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], LibraryagentShelvesBooksListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], LibraryagentShelvesBooksListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], LibraryagentShelvesBooksListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], LibraryagentShelvesBooksListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], LibraryagentShelvesBooksListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], LibraryagentShelvesBooksListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], LibraryagentShelvesBooksListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], LibraryagentShelvesBooksListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], LibraryagentShelvesBooksListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], LibraryagentShelvesBooksListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], LibraryagentShelvesBooksListQueryParams.prototype, "uploadProtocol", void 0);
    return LibraryagentShelvesBooksListQueryParams;
}(SpeakeasyBase));
export { LibraryagentShelvesBooksListQueryParams };
var LibraryagentShelvesBooksListSecurity = /** @class */ (function (_super) {
    __extends(LibraryagentShelvesBooksListSecurity, _super);
    function LibraryagentShelvesBooksListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], LibraryagentShelvesBooksListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], LibraryagentShelvesBooksListSecurity.prototype, "oauth2c", void 0);
    return LibraryagentShelvesBooksListSecurity;
}(SpeakeasyBase));
export { LibraryagentShelvesBooksListSecurity };
var LibraryagentShelvesBooksListRequest = /** @class */ (function (_super) {
    __extends(LibraryagentShelvesBooksListRequest, _super);
    function LibraryagentShelvesBooksListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LibraryagentShelvesBooksListPathParams)
    ], LibraryagentShelvesBooksListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LibraryagentShelvesBooksListQueryParams)
    ], LibraryagentShelvesBooksListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LibraryagentShelvesBooksListSecurity)
    ], LibraryagentShelvesBooksListRequest.prototype, "security", void 0);
    return LibraryagentShelvesBooksListRequest;
}(SpeakeasyBase));
export { LibraryagentShelvesBooksListRequest };
var LibraryagentShelvesBooksListResponse = /** @class */ (function (_super) {
    __extends(LibraryagentShelvesBooksListResponse, _super);
    function LibraryagentShelvesBooksListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], LibraryagentShelvesBooksListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleExampleLibraryagentV1ListBooksResponse)
    ], LibraryagentShelvesBooksListResponse.prototype, "googleExampleLibraryagentV1ListBooksResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], LibraryagentShelvesBooksListResponse.prototype, "statusCode", void 0);
    return LibraryagentShelvesBooksListResponse;
}(SpeakeasyBase));
export { LibraryagentShelvesBooksListResponse };
