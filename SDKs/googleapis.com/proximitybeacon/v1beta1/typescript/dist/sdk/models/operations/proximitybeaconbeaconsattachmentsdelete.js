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
var ProximitybeaconBeaconsAttachmentsDeletePathParams = /** @class */ (function (_super) {
    __extends(ProximitybeaconBeaconsAttachmentsDeletePathParams, _super);
    function ProximitybeaconBeaconsAttachmentsDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=attachmentName" }),
        __metadata("design:type", String)
    ], ProximitybeaconBeaconsAttachmentsDeletePathParams.prototype, "attachmentName", void 0);
    return ProximitybeaconBeaconsAttachmentsDeletePathParams;
}(SpeakeasyBase));
export { ProximitybeaconBeaconsAttachmentsDeletePathParams };
var ProximitybeaconBeaconsAttachmentsDeleteQueryParams = /** @class */ (function (_super) {
    __extends(ProximitybeaconBeaconsAttachmentsDeleteQueryParams, _super);
    function ProximitybeaconBeaconsAttachmentsDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ProximitybeaconBeaconsAttachmentsDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ProximitybeaconBeaconsAttachmentsDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ProximitybeaconBeaconsAttachmentsDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ProximitybeaconBeaconsAttachmentsDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ProximitybeaconBeaconsAttachmentsDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ProximitybeaconBeaconsAttachmentsDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ProximitybeaconBeaconsAttachmentsDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ProximitybeaconBeaconsAttachmentsDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=projectId" }),
        __metadata("design:type", String)
    ], ProximitybeaconBeaconsAttachmentsDeleteQueryParams.prototype, "projectId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ProximitybeaconBeaconsAttachmentsDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ProximitybeaconBeaconsAttachmentsDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ProximitybeaconBeaconsAttachmentsDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return ProximitybeaconBeaconsAttachmentsDeleteQueryParams;
}(SpeakeasyBase));
export { ProximitybeaconBeaconsAttachmentsDeleteQueryParams };
var ProximitybeaconBeaconsAttachmentsDeleteSecurity = /** @class */ (function (_super) {
    __extends(ProximitybeaconBeaconsAttachmentsDeleteSecurity, _super);
    function ProximitybeaconBeaconsAttachmentsDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ProximitybeaconBeaconsAttachmentsDeleteSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ProximitybeaconBeaconsAttachmentsDeleteSecurity.prototype, "oauth2c", void 0);
    return ProximitybeaconBeaconsAttachmentsDeleteSecurity;
}(SpeakeasyBase));
export { ProximitybeaconBeaconsAttachmentsDeleteSecurity };
var ProximitybeaconBeaconsAttachmentsDeleteRequest = /** @class */ (function (_super) {
    __extends(ProximitybeaconBeaconsAttachmentsDeleteRequest, _super);
    function ProximitybeaconBeaconsAttachmentsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ProximitybeaconBeaconsAttachmentsDeletePathParams)
    ], ProximitybeaconBeaconsAttachmentsDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ProximitybeaconBeaconsAttachmentsDeleteQueryParams)
    ], ProximitybeaconBeaconsAttachmentsDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ProximitybeaconBeaconsAttachmentsDeleteSecurity)
    ], ProximitybeaconBeaconsAttachmentsDeleteRequest.prototype, "security", void 0);
    return ProximitybeaconBeaconsAttachmentsDeleteRequest;
}(SpeakeasyBase));
export { ProximitybeaconBeaconsAttachmentsDeleteRequest };
var ProximitybeaconBeaconsAttachmentsDeleteResponse = /** @class */ (function (_super) {
    __extends(ProximitybeaconBeaconsAttachmentsDeleteResponse, _super);
    function ProximitybeaconBeaconsAttachmentsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ProximitybeaconBeaconsAttachmentsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], ProximitybeaconBeaconsAttachmentsDeleteResponse.prototype, "empty", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ProximitybeaconBeaconsAttachmentsDeleteResponse.prototype, "statusCode", void 0);
    return ProximitybeaconBeaconsAttachmentsDeleteResponse;
}(SpeakeasyBase));
export { ProximitybeaconBeaconsAttachmentsDeleteResponse };
