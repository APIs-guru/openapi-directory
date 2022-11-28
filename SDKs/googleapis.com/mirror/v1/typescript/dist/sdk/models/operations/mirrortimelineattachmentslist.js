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
var MirrorTimelineAttachmentsListPathParams = /** @class */ (function (_super) {
    __extends(MirrorTimelineAttachmentsListPathParams, _super);
    function MirrorTimelineAttachmentsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=itemId" }),
        __metadata("design:type", String)
    ], MirrorTimelineAttachmentsListPathParams.prototype, "itemId", void 0);
    return MirrorTimelineAttachmentsListPathParams;
}(SpeakeasyBase));
export { MirrorTimelineAttachmentsListPathParams };
var MirrorTimelineAttachmentsListQueryParams = /** @class */ (function (_super) {
    __extends(MirrorTimelineAttachmentsListQueryParams, _super);
    function MirrorTimelineAttachmentsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], MirrorTimelineAttachmentsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], MirrorTimelineAttachmentsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], MirrorTimelineAttachmentsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], MirrorTimelineAttachmentsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], MirrorTimelineAttachmentsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], MirrorTimelineAttachmentsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], MirrorTimelineAttachmentsListQueryParams.prototype, "userIp", void 0);
    return MirrorTimelineAttachmentsListQueryParams;
}(SpeakeasyBase));
export { MirrorTimelineAttachmentsListQueryParams };
var MirrorTimelineAttachmentsListSecurity = /** @class */ (function (_super) {
    __extends(MirrorTimelineAttachmentsListSecurity, _super);
    function MirrorTimelineAttachmentsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MirrorTimelineAttachmentsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MirrorTimelineAttachmentsListSecurity.prototype, "oauth2c", void 0);
    return MirrorTimelineAttachmentsListSecurity;
}(SpeakeasyBase));
export { MirrorTimelineAttachmentsListSecurity };
var MirrorTimelineAttachmentsListRequest = /** @class */ (function (_super) {
    __extends(MirrorTimelineAttachmentsListRequest, _super);
    function MirrorTimelineAttachmentsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MirrorTimelineAttachmentsListPathParams)
    ], MirrorTimelineAttachmentsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MirrorTimelineAttachmentsListQueryParams)
    ], MirrorTimelineAttachmentsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MirrorTimelineAttachmentsListSecurity)
    ], MirrorTimelineAttachmentsListRequest.prototype, "security", void 0);
    return MirrorTimelineAttachmentsListRequest;
}(SpeakeasyBase));
export { MirrorTimelineAttachmentsListRequest };
var MirrorTimelineAttachmentsListResponse = /** @class */ (function (_super) {
    __extends(MirrorTimelineAttachmentsListResponse, _super);
    function MirrorTimelineAttachmentsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineAttachmentsListResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], MirrorTimelineAttachmentsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], MirrorTimelineAttachmentsListResponse.prototype, "statusCode", void 0);
    return MirrorTimelineAttachmentsListResponse;
}(SpeakeasyBase));
export { MirrorTimelineAttachmentsListResponse };
