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
var AddVirtualFolderQueryParams = /** @class */ (function (_super) {
    __extends(AddVirtualFolderQueryParams, _super);
    function AddVirtualFolderQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=collectionType" }),
        __metadata("design:type", String)
    ], AddVirtualFolderQueryParams.prototype, "collectionType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], AddVirtualFolderQueryParams.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=paths" }),
        __metadata("design:type", Array)
    ], AddVirtualFolderQueryParams.prototype, "paths", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=refreshLibrary" }),
        __metadata("design:type", Boolean)
    ], AddVirtualFolderQueryParams.prototype, "refreshLibrary", void 0);
    return AddVirtualFolderQueryParams;
}(SpeakeasyBase));
export { AddVirtualFolderQueryParams };
var AddVirtualFolderRequests = /** @class */ (function (_super) {
    __extends(AddVirtualFolderRequests, _super);
    function AddVirtualFolderRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/*+json" }),
        __metadata("design:type", shared.AddVirtualFolderDto)
    ], AddVirtualFolderRequests.prototype, "addVirtualFolderDto", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.AddVirtualFolderDto)
    ], AddVirtualFolderRequests.prototype, "addVirtualFolderDto1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.AddVirtualFolderDto)
    ], AddVirtualFolderRequests.prototype, "addVirtualFolderDto2", void 0);
    return AddVirtualFolderRequests;
}(SpeakeasyBase));
export { AddVirtualFolderRequests };
var AddVirtualFolderSecurity = /** @class */ (function (_super) {
    __extends(AddVirtualFolderSecurity, _super);
    function AddVirtualFolderSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeCustomAuthentication)
    ], AddVirtualFolderSecurity.prototype, "customAuthentication", void 0);
    return AddVirtualFolderSecurity;
}(SpeakeasyBase));
export { AddVirtualFolderSecurity };
var AddVirtualFolderRequest = /** @class */ (function (_super) {
    __extends(AddVirtualFolderRequest, _super);
    function AddVirtualFolderRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AddVirtualFolderQueryParams)
    ], AddVirtualFolderRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AddVirtualFolderRequests)
    ], AddVirtualFolderRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AddVirtualFolderSecurity)
    ], AddVirtualFolderRequest.prototype, "security", void 0);
    return AddVirtualFolderRequest;
}(SpeakeasyBase));
export { AddVirtualFolderRequest };
var AddVirtualFolderResponse = /** @class */ (function (_super) {
    __extends(AddVirtualFolderResponse, _super);
    function AddVirtualFolderResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AddVirtualFolderResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AddVirtualFolderResponse.prototype, "statusCode", void 0);
    return AddVirtualFolderResponse;
}(SpeakeasyBase));
export { AddVirtualFolderResponse };
