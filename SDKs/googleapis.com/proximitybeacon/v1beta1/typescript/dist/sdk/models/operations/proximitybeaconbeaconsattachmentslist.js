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
var ProximitybeaconBeaconsAttachmentsListPathParams = /** @class */ (function (_super) {
    __extends(ProximitybeaconBeaconsAttachmentsListPathParams, _super);
    function ProximitybeaconBeaconsAttachmentsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=beaconName" }),
        __metadata("design:type", String)
    ], ProximitybeaconBeaconsAttachmentsListPathParams.prototype, "beaconName", void 0);
    return ProximitybeaconBeaconsAttachmentsListPathParams;
}(SpeakeasyBase));
export { ProximitybeaconBeaconsAttachmentsListPathParams };
var ProximitybeaconBeaconsAttachmentsListQueryParams = /** @class */ (function (_super) {
    __extends(ProximitybeaconBeaconsAttachmentsListQueryParams, _super);
    function ProximitybeaconBeaconsAttachmentsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ProximitybeaconBeaconsAttachmentsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ProximitybeaconBeaconsAttachmentsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ProximitybeaconBeaconsAttachmentsListQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ProximitybeaconBeaconsAttachmentsListQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ProximitybeaconBeaconsAttachmentsListQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ProximitybeaconBeaconsAttachmentsListQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=namespacedType" }),
        __metadata("design:type", String)
    ], ProximitybeaconBeaconsAttachmentsListQueryParams.prototype, "namespacedType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ProximitybeaconBeaconsAttachmentsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ProximitybeaconBeaconsAttachmentsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=projectId" }),
        __metadata("design:type", String)
    ], ProximitybeaconBeaconsAttachmentsListQueryParams.prototype, "projectId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ProximitybeaconBeaconsAttachmentsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ProximitybeaconBeaconsAttachmentsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ProximitybeaconBeaconsAttachmentsListQueryParams.prototype, "uploadProtocol", void 0);
    return ProximitybeaconBeaconsAttachmentsListQueryParams;
}(SpeakeasyBase));
export { ProximitybeaconBeaconsAttachmentsListQueryParams };
var ProximitybeaconBeaconsAttachmentsListSecurity = /** @class */ (function (_super) {
    __extends(ProximitybeaconBeaconsAttachmentsListSecurity, _super);
    function ProximitybeaconBeaconsAttachmentsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ProximitybeaconBeaconsAttachmentsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ProximitybeaconBeaconsAttachmentsListSecurity.prototype, "oauth2c", void 0);
    return ProximitybeaconBeaconsAttachmentsListSecurity;
}(SpeakeasyBase));
export { ProximitybeaconBeaconsAttachmentsListSecurity };
var ProximitybeaconBeaconsAttachmentsListRequest = /** @class */ (function (_super) {
    __extends(ProximitybeaconBeaconsAttachmentsListRequest, _super);
    function ProximitybeaconBeaconsAttachmentsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ProximitybeaconBeaconsAttachmentsListPathParams)
    ], ProximitybeaconBeaconsAttachmentsListRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ProximitybeaconBeaconsAttachmentsListQueryParams)
    ], ProximitybeaconBeaconsAttachmentsListRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ProximitybeaconBeaconsAttachmentsListSecurity)
    ], ProximitybeaconBeaconsAttachmentsListRequest.prototype, "security", void 0);
    return ProximitybeaconBeaconsAttachmentsListRequest;
}(SpeakeasyBase));
export { ProximitybeaconBeaconsAttachmentsListRequest };
var ProximitybeaconBeaconsAttachmentsListResponse = /** @class */ (function (_super) {
    __extends(ProximitybeaconBeaconsAttachmentsListResponse, _super);
    function ProximitybeaconBeaconsAttachmentsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ProximitybeaconBeaconsAttachmentsListResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListBeaconAttachmentsResponse)
    ], ProximitybeaconBeaconsAttachmentsListResponse.prototype, "listBeaconAttachmentsResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ProximitybeaconBeaconsAttachmentsListResponse.prototype, "statusCode", void 0);
    return ProximitybeaconBeaconsAttachmentsListResponse;
}(SpeakeasyBase));
export { ProximitybeaconBeaconsAttachmentsListResponse };
