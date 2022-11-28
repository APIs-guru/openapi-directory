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
var DrillersFilesListPathParams = /** @class */ (function (_super) {
    __extends(DrillersFilesListPathParams, _super);
    function DrillersFilesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=person_guid" }),
        __metadata("design:type", String)
    ], DrillersFilesListPathParams.prototype, "personGuid", void 0);
    return DrillersFilesListPathParams;
}(SpeakeasyBase));
export { DrillersFilesListPathParams };
var DrillersFilesList200ApplicationJsonPrivate = /** @class */ (function (_super) {
    __extends(DrillersFilesList200ApplicationJsonPrivate, _super);
    function DrillersFilesList200ApplicationJsonPrivate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], DrillersFilesList200ApplicationJsonPrivate.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], DrillersFilesList200ApplicationJsonPrivate.prototype, "url", void 0);
    return DrillersFilesList200ApplicationJsonPrivate;
}(SpeakeasyBase));
export { DrillersFilesList200ApplicationJsonPrivate };
var DrillersFilesList200ApplicationJsonPublic = /** @class */ (function (_super) {
    __extends(DrillersFilesList200ApplicationJsonPublic, _super);
    function DrillersFilesList200ApplicationJsonPublic() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], DrillersFilesList200ApplicationJsonPublic.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], DrillersFilesList200ApplicationJsonPublic.prototype, "url", void 0);
    return DrillersFilesList200ApplicationJsonPublic;
}(SpeakeasyBase));
export { DrillersFilesList200ApplicationJsonPublic };
var DrillersFilesList200ApplicationJson = /** @class */ (function (_super) {
    __extends(DrillersFilesList200ApplicationJson, _super);
    function DrillersFilesList200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=private", elemType: DrillersFilesList200ApplicationJsonPrivate }),
        __metadata("design:type", Array)
    ], DrillersFilesList200ApplicationJson.prototype, "private", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=public", elemType: DrillersFilesList200ApplicationJsonPublic }),
        __metadata("design:type", Array)
    ], DrillersFilesList200ApplicationJson.prototype, "public", void 0);
    return DrillersFilesList200ApplicationJson;
}(SpeakeasyBase));
export { DrillersFilesList200ApplicationJson };
var DrillersFilesListRequest = /** @class */ (function (_super) {
    __extends(DrillersFilesListRequest, _super);
    function DrillersFilesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DrillersFilesListPathParams)
    ], DrillersFilesListRequest.prototype, "pathParams", void 0);
    return DrillersFilesListRequest;
}(SpeakeasyBase));
export { DrillersFilesListRequest };
var DrillersFilesListResponse = /** @class */ (function (_super) {
    __extends(DrillersFilesListResponse, _super);
    function DrillersFilesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DrillersFilesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DrillersFilesListResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DrillersFilesList200ApplicationJson)
    ], DrillersFilesListResponse.prototype, "drillersFilesList200ApplicationJsonObject", void 0);
    return DrillersFilesListResponse;
}(SpeakeasyBase));
export { DrillersFilesListResponse };
