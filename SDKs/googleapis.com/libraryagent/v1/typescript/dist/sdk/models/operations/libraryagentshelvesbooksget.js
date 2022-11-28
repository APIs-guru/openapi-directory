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
var LibraryagentShelvesBooksGetPathParams = /** @class */ (function (_super) {
    __extends(LibraryagentShelvesBooksGetPathParams, _super);
    function LibraryagentShelvesBooksGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], LibraryagentShelvesBooksGetPathParams.prototype, "name", void 0);
    return LibraryagentShelvesBooksGetPathParams;
}(SpeakeasyBase));
export { LibraryagentShelvesBooksGetPathParams };
var LibraryagentShelvesBooksGetQueryParams = /** @class */ (function (_super) {
    __extends(LibraryagentShelvesBooksGetQueryParams, _super);
    function LibraryagentShelvesBooksGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], LibraryagentShelvesBooksGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], LibraryagentShelvesBooksGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], LibraryagentShelvesBooksGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], LibraryagentShelvesBooksGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], LibraryagentShelvesBooksGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], LibraryagentShelvesBooksGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], LibraryagentShelvesBooksGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], LibraryagentShelvesBooksGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], LibraryagentShelvesBooksGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], LibraryagentShelvesBooksGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], LibraryagentShelvesBooksGetQueryParams.prototype, "uploadProtocol", void 0);
    return LibraryagentShelvesBooksGetQueryParams;
}(SpeakeasyBase));
export { LibraryagentShelvesBooksGetQueryParams };
var LibraryagentShelvesBooksGetSecurity = /** @class */ (function (_super) {
    __extends(LibraryagentShelvesBooksGetSecurity, _super);
    function LibraryagentShelvesBooksGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], LibraryagentShelvesBooksGetSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], LibraryagentShelvesBooksGetSecurity.prototype, "oauth2c", void 0);
    return LibraryagentShelvesBooksGetSecurity;
}(SpeakeasyBase));
export { LibraryagentShelvesBooksGetSecurity };
var LibraryagentShelvesBooksGetRequest = /** @class */ (function (_super) {
    __extends(LibraryagentShelvesBooksGetRequest, _super);
    function LibraryagentShelvesBooksGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LibraryagentShelvesBooksGetPathParams)
    ], LibraryagentShelvesBooksGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LibraryagentShelvesBooksGetQueryParams)
    ], LibraryagentShelvesBooksGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LibraryagentShelvesBooksGetSecurity)
    ], LibraryagentShelvesBooksGetRequest.prototype, "security", void 0);
    return LibraryagentShelvesBooksGetRequest;
}(SpeakeasyBase));
export { LibraryagentShelvesBooksGetRequest };
var LibraryagentShelvesBooksGetResponse = /** @class */ (function (_super) {
    __extends(LibraryagentShelvesBooksGetResponse, _super);
    function LibraryagentShelvesBooksGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], LibraryagentShelvesBooksGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleExampleLibraryagentV1Book)
    ], LibraryagentShelvesBooksGetResponse.prototype, "googleExampleLibraryagentV1Book", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], LibraryagentShelvesBooksGetResponse.prototype, "statusCode", void 0);
    return LibraryagentShelvesBooksGetResponse;
}(SpeakeasyBase));
export { LibraryagentShelvesBooksGetResponse };
