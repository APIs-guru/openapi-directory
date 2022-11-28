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
var CreateVolumeRequestBody = /** @class */ (function (_super) {
    __extends(CreateVolumeRequestBody, _super);
    function CreateVolumeRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=config_id" }),
        __metadata("design:type", Number)
    ], CreateVolumeRequestBody.prototype, "configId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], CreateVolumeRequestBody.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=linode_id" }),
        __metadata("design:type", Number)
    ], CreateVolumeRequestBody.prototype, "linodeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=region" }),
        __metadata("design:type", String)
    ], CreateVolumeRequestBody.prototype, "region", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=size" }),
        __metadata("design:type", Number)
    ], CreateVolumeRequestBody.prototype, "size", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Array)
    ], CreateVolumeRequestBody.prototype, "tags", void 0);
    return CreateVolumeRequestBody;
}(SpeakeasyBase));
export { CreateVolumeRequestBody };
var CreateVolumeSecurity = /** @class */ (function (_super) {
    __extends(CreateVolumeSecurity, _super);
    function CreateVolumeSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], CreateVolumeSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], CreateVolumeSecurity.prototype, "oauth", void 0);
    return CreateVolumeSecurity;
}(SpeakeasyBase));
export { CreateVolumeSecurity };
var CreateVolumeDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(CreateVolumeDefaultApplicationJson, _super);
    function CreateVolumeDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], CreateVolumeDefaultApplicationJson.prototype, "errors", void 0);
    return CreateVolumeDefaultApplicationJson;
}(SpeakeasyBase));
export { CreateVolumeDefaultApplicationJson };
var CreateVolumeRequest = /** @class */ (function (_super) {
    __extends(CreateVolumeRequest, _super);
    function CreateVolumeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateVolumeRequestBody)
    ], CreateVolumeRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateVolumeSecurity)
    ], CreateVolumeRequest.prototype, "security", void 0);
    return CreateVolumeRequest;
}(SpeakeasyBase));
export { CreateVolumeRequest };
var CreateVolumeResponse = /** @class */ (function (_super) {
    __extends(CreateVolumeResponse, _super);
    function CreateVolumeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateVolumeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateVolumeResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Volume)
    ], CreateVolumeResponse.prototype, "volume", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateVolumeDefaultApplicationJson)
    ], CreateVolumeResponse.prototype, "createVolumeDefaultApplicationJsonObject", void 0);
    return CreateVolumeResponse;
}(SpeakeasyBase));
export { CreateVolumeResponse };
