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
var WellsFilesListPathParams = /** @class */ (function (_super) {
    __extends(WellsFilesListPathParams, _super);
    function WellsFilesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tag" }),
        __metadata("design:type", String)
    ], WellsFilesListPathParams.prototype, "tag", void 0);
    return WellsFilesListPathParams;
}(SpeakeasyBase));
export { WellsFilesListPathParams };
var WellsFilesList200ApplicationJsonPrivate = /** @class */ (function (_super) {
    __extends(WellsFilesList200ApplicationJsonPrivate, _super);
    function WellsFilesList200ApplicationJsonPrivate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], WellsFilesList200ApplicationJsonPrivate.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], WellsFilesList200ApplicationJsonPrivate.prototype, "url", void 0);
    return WellsFilesList200ApplicationJsonPrivate;
}(SpeakeasyBase));
export { WellsFilesList200ApplicationJsonPrivate };
var WellsFilesList200ApplicationJsonPublic = /** @class */ (function (_super) {
    __extends(WellsFilesList200ApplicationJsonPublic, _super);
    function WellsFilesList200ApplicationJsonPublic() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], WellsFilesList200ApplicationJsonPublic.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], WellsFilesList200ApplicationJsonPublic.prototype, "url", void 0);
    return WellsFilesList200ApplicationJsonPublic;
}(SpeakeasyBase));
export { WellsFilesList200ApplicationJsonPublic };
var WellsFilesList200ApplicationJson = /** @class */ (function (_super) {
    __extends(WellsFilesList200ApplicationJson, _super);
    function WellsFilesList200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=private", elemType: WellsFilesList200ApplicationJsonPrivate }),
        __metadata("design:type", Array)
    ], WellsFilesList200ApplicationJson.prototype, "private", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=public", elemType: WellsFilesList200ApplicationJsonPublic }),
        __metadata("design:type", Array)
    ], WellsFilesList200ApplicationJson.prototype, "public", void 0);
    return WellsFilesList200ApplicationJson;
}(SpeakeasyBase));
export { WellsFilesList200ApplicationJson };
var WellsFilesListRequest = /** @class */ (function (_super) {
    __extends(WellsFilesListRequest, _super);
    function WellsFilesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", WellsFilesListPathParams)
    ], WellsFilesListRequest.prototype, "pathParams", void 0);
    return WellsFilesListRequest;
}(SpeakeasyBase));
export { WellsFilesListRequest };
var WellsFilesListResponse = /** @class */ (function (_super) {
    __extends(WellsFilesListResponse, _super);
    function WellsFilesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], WellsFilesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], WellsFilesListResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", WellsFilesList200ApplicationJson)
    ], WellsFilesListResponse.prototype, "wellsFilesList200ApplicationJsonObject", void 0);
    return WellsFilesListResponse;
}(SpeakeasyBase));
export { WellsFilesListResponse };
