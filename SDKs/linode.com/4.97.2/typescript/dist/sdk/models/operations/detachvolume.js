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
var DetachVolumePathParams = /** @class */ (function (_super) {
    __extends(DetachVolumePathParams, _super);
    function DetachVolumePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=volumeId" }),
        __metadata("design:type", Number)
    ], DetachVolumePathParams.prototype, "volumeId", void 0);
    return DetachVolumePathParams;
}(SpeakeasyBase));
export { DetachVolumePathParams };
var DetachVolumeSecurity = /** @class */ (function (_super) {
    __extends(DetachVolumeSecurity, _super);
    function DetachVolumeSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], DetachVolumeSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], DetachVolumeSecurity.prototype, "oauth", void 0);
    return DetachVolumeSecurity;
}(SpeakeasyBase));
export { DetachVolumeSecurity };
var DetachVolumeDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(DetachVolumeDefaultApplicationJson, _super);
    function DetachVolumeDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], DetachVolumeDefaultApplicationJson.prototype, "errors", void 0);
    return DetachVolumeDefaultApplicationJson;
}(SpeakeasyBase));
export { DetachVolumeDefaultApplicationJson };
var DetachVolumeRequest = /** @class */ (function (_super) {
    __extends(DetachVolumeRequest, _super);
    function DetachVolumeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DetachVolumePathParams)
    ], DetachVolumeRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DetachVolumeSecurity)
    ], DetachVolumeRequest.prototype, "security", void 0);
    return DetachVolumeRequest;
}(SpeakeasyBase));
export { DetachVolumeRequest };
var DetachVolumeResponse = /** @class */ (function (_super) {
    __extends(DetachVolumeResponse, _super);
    function DetachVolumeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DetachVolumeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DetachVolumeResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], DetachVolumeResponse.prototype, "detachVolume200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DetachVolumeDefaultApplicationJson)
    ], DetachVolumeResponse.prototype, "detachVolumeDefaultApplicationJsonObject", void 0);
    return DetachVolumeResponse;
}(SpeakeasyBase));
export { DetachVolumeResponse };
