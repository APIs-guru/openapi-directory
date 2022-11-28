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
var CancelBackupsPathParams = /** @class */ (function (_super) {
    __extends(CancelBackupsPathParams, _super);
    function CancelBackupsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=linodeId" }),
        __metadata("design:type", Number)
    ], CancelBackupsPathParams.prototype, "linodeId", void 0);
    return CancelBackupsPathParams;
}(SpeakeasyBase));
export { CancelBackupsPathParams };
var CancelBackupsSecurity = /** @class */ (function (_super) {
    __extends(CancelBackupsSecurity, _super);
    function CancelBackupsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], CancelBackupsSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], CancelBackupsSecurity.prototype, "oauth", void 0);
    return CancelBackupsSecurity;
}(SpeakeasyBase));
export { CancelBackupsSecurity };
var CancelBackupsDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(CancelBackupsDefaultApplicationJson, _super);
    function CancelBackupsDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], CancelBackupsDefaultApplicationJson.prototype, "errors", void 0);
    return CancelBackupsDefaultApplicationJson;
}(SpeakeasyBase));
export { CancelBackupsDefaultApplicationJson };
var CancelBackupsRequest = /** @class */ (function (_super) {
    __extends(CancelBackupsRequest, _super);
    function CancelBackupsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CancelBackupsPathParams)
    ], CancelBackupsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CancelBackupsSecurity)
    ], CancelBackupsRequest.prototype, "security", void 0);
    return CancelBackupsRequest;
}(SpeakeasyBase));
export { CancelBackupsRequest };
var CancelBackupsResponse = /** @class */ (function (_super) {
    __extends(CancelBackupsResponse, _super);
    function CancelBackupsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CancelBackupsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CancelBackupsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], CancelBackupsResponse.prototype, "cancelBackups200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CancelBackupsDefaultApplicationJson)
    ], CancelBackupsResponse.prototype, "cancelBackupsDefaultApplicationJsonObject", void 0);
    return CancelBackupsResponse;
}(SpeakeasyBase));
export { CancelBackupsResponse };
