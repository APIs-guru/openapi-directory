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
var MirrorTimelineAttachmentsGetPathParams = /** @class */ (function (_super) {
    __extends(MirrorTimelineAttachmentsGetPathParams, _super);
    function MirrorTimelineAttachmentsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=attachmentId" }),
        __metadata("design:type", String)
    ], MirrorTimelineAttachmentsGetPathParams.prototype, "attachmentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=itemId" }),
        __metadata("design:type", String)
    ], MirrorTimelineAttachmentsGetPathParams.prototype, "itemId", void 0);
    return MirrorTimelineAttachmentsGetPathParams;
}(SpeakeasyBase));
export { MirrorTimelineAttachmentsGetPathParams };
var MirrorTimelineAttachmentsGetQueryParams = /** @class */ (function (_super) {
    __extends(MirrorTimelineAttachmentsGetQueryParams, _super);
    function MirrorTimelineAttachmentsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], MirrorTimelineAttachmentsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], MirrorTimelineAttachmentsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], MirrorTimelineAttachmentsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], MirrorTimelineAttachmentsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], MirrorTimelineAttachmentsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], MirrorTimelineAttachmentsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], MirrorTimelineAttachmentsGetQueryParams.prototype, "userIp", void 0);
    return MirrorTimelineAttachmentsGetQueryParams;
}(SpeakeasyBase));
export { MirrorTimelineAttachmentsGetQueryParams };
var MirrorTimelineAttachmentsGetSecurity = /** @class */ (function (_super) {
    __extends(MirrorTimelineAttachmentsGetSecurity, _super);
    function MirrorTimelineAttachmentsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MirrorTimelineAttachmentsGetSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MirrorTimelineAttachmentsGetSecurity.prototype, "oauth2c", void 0);
    return MirrorTimelineAttachmentsGetSecurity;
}(SpeakeasyBase));
export { MirrorTimelineAttachmentsGetSecurity };
var MirrorTimelineAttachmentsGetRequest = /** @class */ (function (_super) {
    __extends(MirrorTimelineAttachmentsGetRequest, _super);
    function MirrorTimelineAttachmentsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MirrorTimelineAttachmentsGetPathParams)
    ], MirrorTimelineAttachmentsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MirrorTimelineAttachmentsGetQueryParams)
    ], MirrorTimelineAttachmentsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MirrorTimelineAttachmentsGetSecurity)
    ], MirrorTimelineAttachmentsGetRequest.prototype, "security", void 0);
    return MirrorTimelineAttachmentsGetRequest;
}(SpeakeasyBase));
export { MirrorTimelineAttachmentsGetRequest };
var MirrorTimelineAttachmentsGetResponse = /** @class */ (function (_super) {
    __extends(MirrorTimelineAttachmentsGetResponse, _super);
    function MirrorTimelineAttachmentsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineAttachmentsGetResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], MirrorTimelineAttachmentsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], MirrorTimelineAttachmentsGetResponse.prototype, "statusCode", void 0);
    return MirrorTimelineAttachmentsGetResponse;
}(SpeakeasyBase));
export { MirrorTimelineAttachmentsGetResponse };
