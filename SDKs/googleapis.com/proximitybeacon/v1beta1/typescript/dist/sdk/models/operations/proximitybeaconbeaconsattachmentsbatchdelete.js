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
var ProximitybeaconBeaconsAttachmentsBatchDeletePathParams = /** @class */ (function (_super) {
    __extends(ProximitybeaconBeaconsAttachmentsBatchDeletePathParams, _super);
    function ProximitybeaconBeaconsAttachmentsBatchDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=beaconName" }),
        __metadata("design:type", String)
    ], ProximitybeaconBeaconsAttachmentsBatchDeletePathParams.prototype, "beaconName", void 0);
    return ProximitybeaconBeaconsAttachmentsBatchDeletePathParams;
}(SpeakeasyBase));
export { ProximitybeaconBeaconsAttachmentsBatchDeletePathParams };
var ProximitybeaconBeaconsAttachmentsBatchDeleteQueryParams = /** @class */ (function (_super) {
    __extends(ProximitybeaconBeaconsAttachmentsBatchDeleteQueryParams, _super);
    function ProximitybeaconBeaconsAttachmentsBatchDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ProximitybeaconBeaconsAttachmentsBatchDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ProximitybeaconBeaconsAttachmentsBatchDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ProximitybeaconBeaconsAttachmentsBatchDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ProximitybeaconBeaconsAttachmentsBatchDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ProximitybeaconBeaconsAttachmentsBatchDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ProximitybeaconBeaconsAttachmentsBatchDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=namespacedType" }),
        __metadata("design:type", String)
    ], ProximitybeaconBeaconsAttachmentsBatchDeleteQueryParams.prototype, "namespacedType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ProximitybeaconBeaconsAttachmentsBatchDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ProximitybeaconBeaconsAttachmentsBatchDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=projectId" }),
        __metadata("design:type", String)
    ], ProximitybeaconBeaconsAttachmentsBatchDeleteQueryParams.prototype, "projectId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ProximitybeaconBeaconsAttachmentsBatchDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ProximitybeaconBeaconsAttachmentsBatchDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ProximitybeaconBeaconsAttachmentsBatchDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return ProximitybeaconBeaconsAttachmentsBatchDeleteQueryParams;
}(SpeakeasyBase));
export { ProximitybeaconBeaconsAttachmentsBatchDeleteQueryParams };
var ProximitybeaconBeaconsAttachmentsBatchDeleteSecurity = /** @class */ (function (_super) {
    __extends(ProximitybeaconBeaconsAttachmentsBatchDeleteSecurity, _super);
    function ProximitybeaconBeaconsAttachmentsBatchDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ProximitybeaconBeaconsAttachmentsBatchDeleteSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ProximitybeaconBeaconsAttachmentsBatchDeleteSecurity.prototype, "oauth2c", void 0);
    return ProximitybeaconBeaconsAttachmentsBatchDeleteSecurity;
}(SpeakeasyBase));
export { ProximitybeaconBeaconsAttachmentsBatchDeleteSecurity };
var ProximitybeaconBeaconsAttachmentsBatchDeleteRequest = /** @class */ (function (_super) {
    __extends(ProximitybeaconBeaconsAttachmentsBatchDeleteRequest, _super);
    function ProximitybeaconBeaconsAttachmentsBatchDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ProximitybeaconBeaconsAttachmentsBatchDeletePathParams)
    ], ProximitybeaconBeaconsAttachmentsBatchDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ProximitybeaconBeaconsAttachmentsBatchDeleteQueryParams)
    ], ProximitybeaconBeaconsAttachmentsBatchDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ProximitybeaconBeaconsAttachmentsBatchDeleteSecurity)
    ], ProximitybeaconBeaconsAttachmentsBatchDeleteRequest.prototype, "security", void 0);
    return ProximitybeaconBeaconsAttachmentsBatchDeleteRequest;
}(SpeakeasyBase));
export { ProximitybeaconBeaconsAttachmentsBatchDeleteRequest };
var ProximitybeaconBeaconsAttachmentsBatchDeleteResponse = /** @class */ (function (_super) {
    __extends(ProximitybeaconBeaconsAttachmentsBatchDeleteResponse, _super);
    function ProximitybeaconBeaconsAttachmentsBatchDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ProximitybeaconBeaconsAttachmentsBatchDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.DeleteAttachmentsResponse)
    ], ProximitybeaconBeaconsAttachmentsBatchDeleteResponse.prototype, "deleteAttachmentsResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ProximitybeaconBeaconsAttachmentsBatchDeleteResponse.prototype, "statusCode", void 0);
    return ProximitybeaconBeaconsAttachmentsBatchDeleteResponse;
}(SpeakeasyBase));
export { ProximitybeaconBeaconsAttachmentsBatchDeleteResponse };
