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
var AddLinodeDiskPathParams = /** @class */ (function (_super) {
    __extends(AddLinodeDiskPathParams, _super);
    function AddLinodeDiskPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=linodeId" }),
        __metadata("design:type", Number)
    ], AddLinodeDiskPathParams.prototype, "linodeId", void 0);
    return AddLinodeDiskPathParams;
}(SpeakeasyBase));
export { AddLinodeDiskPathParams };
var AddLinodeDiskSecurity = /** @class */ (function (_super) {
    __extends(AddLinodeDiskSecurity, _super);
    function AddLinodeDiskSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], AddLinodeDiskSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], AddLinodeDiskSecurity.prototype, "oauth", void 0);
    return AddLinodeDiskSecurity;
}(SpeakeasyBase));
export { AddLinodeDiskSecurity };
var AddLinodeDiskDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(AddLinodeDiskDefaultApplicationJson, _super);
    function AddLinodeDiskDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], AddLinodeDiskDefaultApplicationJson.prototype, "errors", void 0);
    return AddLinodeDiskDefaultApplicationJson;
}(SpeakeasyBase));
export { AddLinodeDiskDefaultApplicationJson };
var AddLinodeDiskRequest = /** @class */ (function (_super) {
    __extends(AddLinodeDiskRequest, _super);
    function AddLinodeDiskRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AddLinodeDiskPathParams)
    ], AddLinodeDiskRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DiskRequest)
    ], AddLinodeDiskRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AddLinodeDiskSecurity)
    ], AddLinodeDiskRequest.prototype, "security", void 0);
    return AddLinodeDiskRequest;
}(SpeakeasyBase));
export { AddLinodeDiskRequest };
var AddLinodeDiskResponse = /** @class */ (function (_super) {
    __extends(AddLinodeDiskResponse, _super);
    function AddLinodeDiskResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AddLinodeDiskResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Disk)
    ], AddLinodeDiskResponse.prototype, "disk", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AddLinodeDiskResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AddLinodeDiskDefaultApplicationJson)
    ], AddLinodeDiskResponse.prototype, "addLinodeDiskDefaultApplicationJsonObject", void 0);
    return AddLinodeDiskResponse;
}(SpeakeasyBase));
export { AddLinodeDiskResponse };
