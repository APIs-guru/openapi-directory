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
var DeleteVolumePathParams = /** @class */ (function (_super) {
    __extends(DeleteVolumePathParams, _super);
    function DeleteVolumePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=volumeId" }),
        __metadata("design:type", Number)
    ], DeleteVolumePathParams.prototype, "volumeId", void 0);
    return DeleteVolumePathParams;
}(SpeakeasyBase));
export { DeleteVolumePathParams };
var DeleteVolumeSecurity = /** @class */ (function (_super) {
    __extends(DeleteVolumeSecurity, _super);
    function DeleteVolumeSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], DeleteVolumeSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], DeleteVolumeSecurity.prototype, "oauth", void 0);
    return DeleteVolumeSecurity;
}(SpeakeasyBase));
export { DeleteVolumeSecurity };
var DeleteVolumeDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteVolumeDefaultApplicationJson, _super);
    function DeleteVolumeDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], DeleteVolumeDefaultApplicationJson.prototype, "errors", void 0);
    return DeleteVolumeDefaultApplicationJson;
}(SpeakeasyBase));
export { DeleteVolumeDefaultApplicationJson };
var DeleteVolumeRequest = /** @class */ (function (_super) {
    __extends(DeleteVolumeRequest, _super);
    function DeleteVolumeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteVolumePathParams)
    ], DeleteVolumeRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteVolumeSecurity)
    ], DeleteVolumeRequest.prototype, "security", void 0);
    return DeleteVolumeRequest;
}(SpeakeasyBase));
export { DeleteVolumeRequest };
var DeleteVolumeResponse = /** @class */ (function (_super) {
    __extends(DeleteVolumeResponse, _super);
    function DeleteVolumeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteVolumeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteVolumeResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], DeleteVolumeResponse.prototype, "deleteVolume200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteVolumeDefaultApplicationJson)
    ], DeleteVolumeResponse.prototype, "deleteVolumeDefaultApplicationJsonObject", void 0);
    return DeleteVolumeResponse;
}(SpeakeasyBase));
export { DeleteVolumeResponse };
