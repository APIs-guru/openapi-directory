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
var BooksMylibraryAnnotationsDeletePathParams = /** @class */ (function (_super) {
    __extends(BooksMylibraryAnnotationsDeletePathParams, _super);
    function BooksMylibraryAnnotationsDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=annotationId" }),
        __metadata("design:type", String)
    ], BooksMylibraryAnnotationsDeletePathParams.prototype, "annotationId", void 0);
    return BooksMylibraryAnnotationsDeletePathParams;
}(SpeakeasyBase));
export { BooksMylibraryAnnotationsDeletePathParams };
var BooksMylibraryAnnotationsDeleteQueryParams = /** @class */ (function (_super) {
    __extends(BooksMylibraryAnnotationsDeleteQueryParams, _super);
    function BooksMylibraryAnnotationsDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BooksMylibraryAnnotationsDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BooksMylibraryAnnotationsDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BooksMylibraryAnnotationsDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BooksMylibraryAnnotationsDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BooksMylibraryAnnotationsDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BooksMylibraryAnnotationsDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BooksMylibraryAnnotationsDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BooksMylibraryAnnotationsDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BooksMylibraryAnnotationsDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=source" }),
        __metadata("design:type", String)
    ], BooksMylibraryAnnotationsDeleteQueryParams.prototype, "source", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BooksMylibraryAnnotationsDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BooksMylibraryAnnotationsDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return BooksMylibraryAnnotationsDeleteQueryParams;
}(SpeakeasyBase));
export { BooksMylibraryAnnotationsDeleteQueryParams };
var BooksMylibraryAnnotationsDeleteSecurity = /** @class */ (function (_super) {
    __extends(BooksMylibraryAnnotationsDeleteSecurity, _super);
    function BooksMylibraryAnnotationsDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BooksMylibraryAnnotationsDeleteSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BooksMylibraryAnnotationsDeleteSecurity.prototype, "oauth2c", void 0);
    return BooksMylibraryAnnotationsDeleteSecurity;
}(SpeakeasyBase));
export { BooksMylibraryAnnotationsDeleteSecurity };
var BooksMylibraryAnnotationsDeleteRequest = /** @class */ (function (_super) {
    __extends(BooksMylibraryAnnotationsDeleteRequest, _super);
    function BooksMylibraryAnnotationsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BooksMylibraryAnnotationsDeletePathParams)
    ], BooksMylibraryAnnotationsDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BooksMylibraryAnnotationsDeleteQueryParams)
    ], BooksMylibraryAnnotationsDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BooksMylibraryAnnotationsDeleteSecurity)
    ], BooksMylibraryAnnotationsDeleteRequest.prototype, "security", void 0);
    return BooksMylibraryAnnotationsDeleteRequest;
}(SpeakeasyBase));
export { BooksMylibraryAnnotationsDeleteRequest };
var BooksMylibraryAnnotationsDeleteResponse = /** @class */ (function (_super) {
    __extends(BooksMylibraryAnnotationsDeleteResponse, _super);
    function BooksMylibraryAnnotationsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BooksMylibraryAnnotationsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], BooksMylibraryAnnotationsDeleteResponse.prototype, "empty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BooksMylibraryAnnotationsDeleteResponse.prototype, "statusCode", void 0);
    return BooksMylibraryAnnotationsDeleteResponse;
}(SpeakeasyBase));
export { BooksMylibraryAnnotationsDeleteResponse };
