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
var RenameVirtualFolderQueryParams = /** @class */ (function (_super) {
    __extends(RenameVirtualFolderQueryParams, _super);
    function RenameVirtualFolderQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], RenameVirtualFolderQueryParams.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=newName" }),
        __metadata("design:type", String)
    ], RenameVirtualFolderQueryParams.prototype, "newName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=refreshLibrary" }),
        __metadata("design:type", Boolean)
    ], RenameVirtualFolderQueryParams.prototype, "refreshLibrary", void 0);
    return RenameVirtualFolderQueryParams;
}(SpeakeasyBase));
export { RenameVirtualFolderQueryParams };
var RenameVirtualFolderSecurity = /** @class */ (function (_super) {
    __extends(RenameVirtualFolderSecurity, _super);
    function RenameVirtualFolderSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeCustomAuthentication)
    ], RenameVirtualFolderSecurity.prototype, "customAuthentication", void 0);
    return RenameVirtualFolderSecurity;
}(SpeakeasyBase));
export { RenameVirtualFolderSecurity };
var RenameVirtualFolderRequest = /** @class */ (function (_super) {
    __extends(RenameVirtualFolderRequest, _super);
    function RenameVirtualFolderRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RenameVirtualFolderQueryParams)
    ], RenameVirtualFolderRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RenameVirtualFolderSecurity)
    ], RenameVirtualFolderRequest.prototype, "security", void 0);
    return RenameVirtualFolderRequest;
}(SpeakeasyBase));
export { RenameVirtualFolderRequest };
var RenameVirtualFolderResponse = /** @class */ (function (_super) {
    __extends(RenameVirtualFolderResponse, _super);
    function RenameVirtualFolderResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RenameVirtualFolderResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], RenameVirtualFolderResponse.prototype, "problemDetails", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RenameVirtualFolderResponse.prototype, "statusCode", void 0);
    return RenameVirtualFolderResponse;
}(SpeakeasyBase));
export { RenameVirtualFolderResponse };
