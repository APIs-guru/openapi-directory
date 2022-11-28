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
var GetRootFolderPathParams = /** @class */ (function (_super) {
    __extends(GetRootFolderPathParams, _super);
    function GetRootFolderPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], GetRootFolderPathParams.prototype, "userId", void 0);
    return GetRootFolderPathParams;
}(SpeakeasyBase));
export { GetRootFolderPathParams };
var GetRootFolderSecurity = /** @class */ (function (_super) {
    __extends(GetRootFolderSecurity, _super);
    function GetRootFolderSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeCustomAuthentication)
    ], GetRootFolderSecurity.prototype, "customAuthentication", void 0);
    return GetRootFolderSecurity;
}(SpeakeasyBase));
export { GetRootFolderSecurity };
var GetRootFolderRequest = /** @class */ (function (_super) {
    __extends(GetRootFolderRequest, _super);
    function GetRootFolderRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRootFolderPathParams)
    ], GetRootFolderRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRootFolderSecurity)
    ], GetRootFolderRequest.prototype, "security", void 0);
    return GetRootFolderRequest;
}(SpeakeasyBase));
export { GetRootFolderRequest };
var GetRootFolderResponse = /** @class */ (function (_super) {
    __extends(GetRootFolderResponse, _super);
    function GetRootFolderResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BaseItemDto)
    ], GetRootFolderResponse.prototype, "baseItemDto", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetRootFolderResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetRootFolderResponse.prototype, "statusCode", void 0);
    return GetRootFolderResponse;
}(SpeakeasyBase));
export { GetRootFolderResponse };
