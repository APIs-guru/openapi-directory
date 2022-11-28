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
var UpdateDiskPathParams = /** @class */ (function (_super) {
    __extends(UpdateDiskPathParams, _super);
    function UpdateDiskPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=diskId" }),
        __metadata("design:type", Number)
    ], UpdateDiskPathParams.prototype, "diskId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=linodeId" }),
        __metadata("design:type", Number)
    ], UpdateDiskPathParams.prototype, "linodeId", void 0);
    return UpdateDiskPathParams;
}(SpeakeasyBase));
export { UpdateDiskPathParams };
var UpdateDiskSecurity = /** @class */ (function (_super) {
    __extends(UpdateDiskSecurity, _super);
    function UpdateDiskSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], UpdateDiskSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], UpdateDiskSecurity.prototype, "oauth", void 0);
    return UpdateDiskSecurity;
}(SpeakeasyBase));
export { UpdateDiskSecurity };
var UpdateDiskDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(UpdateDiskDefaultApplicationJson, _super);
    function UpdateDiskDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], UpdateDiskDefaultApplicationJson.prototype, "errors", void 0);
    return UpdateDiskDefaultApplicationJson;
}(SpeakeasyBase));
export { UpdateDiskDefaultApplicationJson };
var UpdateDiskRequest = /** @class */ (function (_super) {
    __extends(UpdateDiskRequest, _super);
    function UpdateDiskRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateDiskPathParams)
    ], UpdateDiskRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DiskInput)
    ], UpdateDiskRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateDiskSecurity)
    ], UpdateDiskRequest.prototype, "security", void 0);
    return UpdateDiskRequest;
}(SpeakeasyBase));
export { UpdateDiskRequest };
var UpdateDiskResponse = /** @class */ (function (_super) {
    __extends(UpdateDiskResponse, _super);
    function UpdateDiskResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateDiskResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Disk)
    ], UpdateDiskResponse.prototype, "disk", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateDiskResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateDiskDefaultApplicationJson)
    ], UpdateDiskResponse.prototype, "updateDiskDefaultApplicationJsonObject", void 0);
    return UpdateDiskResponse;
}(SpeakeasyBase));
export { UpdateDiskResponse };
