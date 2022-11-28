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
var AttachVolumePathParams = /** @class */ (function (_super) {
    __extends(AttachVolumePathParams, _super);
    function AttachVolumePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=volumeId" }),
        __metadata("design:type", Number)
    ], AttachVolumePathParams.prototype, "volumeId", void 0);
    return AttachVolumePathParams;
}(SpeakeasyBase));
export { AttachVolumePathParams };
var AttachVolumeRequestBody = /** @class */ (function (_super) {
    __extends(AttachVolumeRequestBody, _super);
    function AttachVolumeRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=config_id" }),
        __metadata("design:type", Number)
    ], AttachVolumeRequestBody.prototype, "configId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=linode_id" }),
        __metadata("design:type", Number)
    ], AttachVolumeRequestBody.prototype, "linodeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=persist_across_boots" }),
        __metadata("design:type", Boolean)
    ], AttachVolumeRequestBody.prototype, "persistAcrossBoots", void 0);
    return AttachVolumeRequestBody;
}(SpeakeasyBase));
export { AttachVolumeRequestBody };
var AttachVolumeSecurity = /** @class */ (function (_super) {
    __extends(AttachVolumeSecurity, _super);
    function AttachVolumeSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], AttachVolumeSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], AttachVolumeSecurity.prototype, "oauth", void 0);
    return AttachVolumeSecurity;
}(SpeakeasyBase));
export { AttachVolumeSecurity };
var AttachVolumeDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(AttachVolumeDefaultApplicationJson, _super);
    function AttachVolumeDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], AttachVolumeDefaultApplicationJson.prototype, "errors", void 0);
    return AttachVolumeDefaultApplicationJson;
}(SpeakeasyBase));
export { AttachVolumeDefaultApplicationJson };
var AttachVolumeRequest = /** @class */ (function (_super) {
    __extends(AttachVolumeRequest, _super);
    function AttachVolumeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AttachVolumePathParams)
    ], AttachVolumeRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", AttachVolumeRequestBody)
    ], AttachVolumeRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AttachVolumeSecurity)
    ], AttachVolumeRequest.prototype, "security", void 0);
    return AttachVolumeRequest;
}(SpeakeasyBase));
export { AttachVolumeRequest };
var AttachVolumeResponse = /** @class */ (function (_super) {
    __extends(AttachVolumeResponse, _super);
    function AttachVolumeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AttachVolumeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AttachVolumeResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Volume)
    ], AttachVolumeResponse.prototype, "volume", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AttachVolumeDefaultApplicationJson)
    ], AttachVolumeResponse.prototype, "attachVolumeDefaultApplicationJsonObject", void 0);
    return AttachVolumeResponse;
}(SpeakeasyBase));
export { AttachVolumeResponse };
