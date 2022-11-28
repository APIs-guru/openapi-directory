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
var ProximitybeaconBeaconsAttachmentsCreatePathParams = /** @class */ (function (_super) {
    __extends(ProximitybeaconBeaconsAttachmentsCreatePathParams, _super);
    function ProximitybeaconBeaconsAttachmentsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=beaconName" }),
        __metadata("design:type", String)
    ], ProximitybeaconBeaconsAttachmentsCreatePathParams.prototype, "beaconName", void 0);
    return ProximitybeaconBeaconsAttachmentsCreatePathParams;
}(SpeakeasyBase));
export { ProximitybeaconBeaconsAttachmentsCreatePathParams };
var ProximitybeaconBeaconsAttachmentsCreateQueryParams = /** @class */ (function (_super) {
    __extends(ProximitybeaconBeaconsAttachmentsCreateQueryParams, _super);
    function ProximitybeaconBeaconsAttachmentsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ProximitybeaconBeaconsAttachmentsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ProximitybeaconBeaconsAttachmentsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ProximitybeaconBeaconsAttachmentsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ProximitybeaconBeaconsAttachmentsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ProximitybeaconBeaconsAttachmentsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ProximitybeaconBeaconsAttachmentsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ProximitybeaconBeaconsAttachmentsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ProximitybeaconBeaconsAttachmentsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=projectId" }),
        __metadata("design:type", String)
    ], ProximitybeaconBeaconsAttachmentsCreateQueryParams.prototype, "projectId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ProximitybeaconBeaconsAttachmentsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ProximitybeaconBeaconsAttachmentsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ProximitybeaconBeaconsAttachmentsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return ProximitybeaconBeaconsAttachmentsCreateQueryParams;
}(SpeakeasyBase));
export { ProximitybeaconBeaconsAttachmentsCreateQueryParams };
var ProximitybeaconBeaconsAttachmentsCreateSecurity = /** @class */ (function (_super) {
    __extends(ProximitybeaconBeaconsAttachmentsCreateSecurity, _super);
    function ProximitybeaconBeaconsAttachmentsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ProximitybeaconBeaconsAttachmentsCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ProximitybeaconBeaconsAttachmentsCreateSecurity.prototype, "oauth2c", void 0);
    return ProximitybeaconBeaconsAttachmentsCreateSecurity;
}(SpeakeasyBase));
export { ProximitybeaconBeaconsAttachmentsCreateSecurity };
var ProximitybeaconBeaconsAttachmentsCreateRequest = /** @class */ (function (_super) {
    __extends(ProximitybeaconBeaconsAttachmentsCreateRequest, _super);
    function ProximitybeaconBeaconsAttachmentsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ProximitybeaconBeaconsAttachmentsCreatePathParams)
    ], ProximitybeaconBeaconsAttachmentsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ProximitybeaconBeaconsAttachmentsCreateQueryParams)
    ], ProximitybeaconBeaconsAttachmentsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.BeaconAttachment)
    ], ProximitybeaconBeaconsAttachmentsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ProximitybeaconBeaconsAttachmentsCreateSecurity)
    ], ProximitybeaconBeaconsAttachmentsCreateRequest.prototype, "security", void 0);
    return ProximitybeaconBeaconsAttachmentsCreateRequest;
}(SpeakeasyBase));
export { ProximitybeaconBeaconsAttachmentsCreateRequest };
var ProximitybeaconBeaconsAttachmentsCreateResponse = /** @class */ (function (_super) {
    __extends(ProximitybeaconBeaconsAttachmentsCreateResponse, _super);
    function ProximitybeaconBeaconsAttachmentsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BeaconAttachment)
    ], ProximitybeaconBeaconsAttachmentsCreateResponse.prototype, "beaconAttachment", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ProximitybeaconBeaconsAttachmentsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ProximitybeaconBeaconsAttachmentsCreateResponse.prototype, "statusCode", void 0);
    return ProximitybeaconBeaconsAttachmentsCreateResponse;
}(SpeakeasyBase));
export { ProximitybeaconBeaconsAttachmentsCreateResponse };
