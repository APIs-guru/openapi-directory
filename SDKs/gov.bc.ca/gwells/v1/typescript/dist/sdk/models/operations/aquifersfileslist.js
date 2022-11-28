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
var AquifersFilesListPathParams = /** @class */ (function (_super) {
    __extends(AquifersFilesListPathParams, _super);
    function AquifersFilesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=aquifer_id" }),
        __metadata("design:type", String)
    ], AquifersFilesListPathParams.prototype, "aquiferId", void 0);
    return AquifersFilesListPathParams;
}(SpeakeasyBase));
export { AquifersFilesListPathParams };
var AquifersFilesList200ApplicationJsonPrivate = /** @class */ (function (_super) {
    __extends(AquifersFilesList200ApplicationJsonPrivate, _super);
    function AquifersFilesList200ApplicationJsonPrivate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], AquifersFilesList200ApplicationJsonPrivate.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], AquifersFilesList200ApplicationJsonPrivate.prototype, "url", void 0);
    return AquifersFilesList200ApplicationJsonPrivate;
}(SpeakeasyBase));
export { AquifersFilesList200ApplicationJsonPrivate };
var AquifersFilesList200ApplicationJsonPublic = /** @class */ (function (_super) {
    __extends(AquifersFilesList200ApplicationJsonPublic, _super);
    function AquifersFilesList200ApplicationJsonPublic() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], AquifersFilesList200ApplicationJsonPublic.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], AquifersFilesList200ApplicationJsonPublic.prototype, "url", void 0);
    return AquifersFilesList200ApplicationJsonPublic;
}(SpeakeasyBase));
export { AquifersFilesList200ApplicationJsonPublic };
var AquifersFilesList200ApplicationJson = /** @class */ (function (_super) {
    __extends(AquifersFilesList200ApplicationJson, _super);
    function AquifersFilesList200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=private", elemType: AquifersFilesList200ApplicationJsonPrivate }),
        __metadata("design:type", Array)
    ], AquifersFilesList200ApplicationJson.prototype, "private", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=public", elemType: AquifersFilesList200ApplicationJsonPublic }),
        __metadata("design:type", Array)
    ], AquifersFilesList200ApplicationJson.prototype, "public", void 0);
    return AquifersFilesList200ApplicationJson;
}(SpeakeasyBase));
export { AquifersFilesList200ApplicationJson };
var AquifersFilesListRequest = /** @class */ (function (_super) {
    __extends(AquifersFilesListRequest, _super);
    function AquifersFilesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AquifersFilesListPathParams)
    ], AquifersFilesListRequest.prototype, "pathParams", void 0);
    return AquifersFilesListRequest;
}(SpeakeasyBase));
export { AquifersFilesListRequest };
var AquifersFilesListResponse = /** @class */ (function (_super) {
    __extends(AquifersFilesListResponse, _super);
    function AquifersFilesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AquifersFilesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AquifersFilesListResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AquifersFilesList200ApplicationJson)
    ], AquifersFilesListResponse.prototype, "aquifersFilesList200ApplicationJsonObject", void 0);
    return AquifersFilesListResponse;
}(SpeakeasyBase));
export { AquifersFilesListResponse };
