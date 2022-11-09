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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var LibraryagentShelvesBooksReturnPathParams = /** @class */ (function (_super) {
    __extends(LibraryagentShelvesBooksReturnPathParams, _super);
    function LibraryagentShelvesBooksReturnPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], LibraryagentShelvesBooksReturnPathParams.prototype, "name", void 0);
    return LibraryagentShelvesBooksReturnPathParams;
}(SpeakeasyBase));
export { LibraryagentShelvesBooksReturnPathParams };
var LibraryagentShelvesBooksReturnQueryParams = /** @class */ (function (_super) {
    __extends(LibraryagentShelvesBooksReturnQueryParams, _super);
    function LibraryagentShelvesBooksReturnQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], LibraryagentShelvesBooksReturnQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], LibraryagentShelvesBooksReturnQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], LibraryagentShelvesBooksReturnQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], LibraryagentShelvesBooksReturnQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], LibraryagentShelvesBooksReturnQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], LibraryagentShelvesBooksReturnQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], LibraryagentShelvesBooksReturnQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], LibraryagentShelvesBooksReturnQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], LibraryagentShelvesBooksReturnQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], LibraryagentShelvesBooksReturnQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], LibraryagentShelvesBooksReturnQueryParams.prototype, "uploadProtocol", void 0);
    return LibraryagentShelvesBooksReturnQueryParams;
}(SpeakeasyBase));
export { LibraryagentShelvesBooksReturnQueryParams };
var LibraryagentShelvesBooksReturnSecurity = /** @class */ (function (_super) {
    __extends(LibraryagentShelvesBooksReturnSecurity, _super);
    function LibraryagentShelvesBooksReturnSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], LibraryagentShelvesBooksReturnSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], LibraryagentShelvesBooksReturnSecurity.prototype, "oauth2c", void 0);
    return LibraryagentShelvesBooksReturnSecurity;
}(SpeakeasyBase));
export { LibraryagentShelvesBooksReturnSecurity };
var LibraryagentShelvesBooksReturnRequest = /** @class */ (function (_super) {
    __extends(LibraryagentShelvesBooksReturnRequest, _super);
    function LibraryagentShelvesBooksReturnRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", LibraryagentShelvesBooksReturnPathParams)
    ], LibraryagentShelvesBooksReturnRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", LibraryagentShelvesBooksReturnQueryParams)
    ], LibraryagentShelvesBooksReturnRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", LibraryagentShelvesBooksReturnSecurity)
    ], LibraryagentShelvesBooksReturnRequest.prototype, "security", void 0);
    return LibraryagentShelvesBooksReturnRequest;
}(SpeakeasyBase));
export { LibraryagentShelvesBooksReturnRequest };
var LibraryagentShelvesBooksReturnResponse = /** @class */ (function (_super) {
    __extends(LibraryagentShelvesBooksReturnResponse, _super);
    function LibraryagentShelvesBooksReturnResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], LibraryagentShelvesBooksReturnResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.GoogleExampleLibraryagentV1Book)
    ], LibraryagentShelvesBooksReturnResponse.prototype, "googleExampleLibraryagentV1Book", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], LibraryagentShelvesBooksReturnResponse.prototype, "statusCode", void 0);
    return LibraryagentShelvesBooksReturnResponse;
}(SpeakeasyBase));
export { LibraryagentShelvesBooksReturnResponse };
