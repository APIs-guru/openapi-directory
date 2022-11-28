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
var DeleteSetupV1LocationsIdDeleteallimagesPathParams = /** @class */ (function (_super) {
    __extends(DeleteSetupV1LocationsIdDeleteallimagesPathParams, _super);
    function DeleteSetupV1LocationsIdDeleteallimagesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], DeleteSetupV1LocationsIdDeleteallimagesPathParams.prototype, "id", void 0);
    return DeleteSetupV1LocationsIdDeleteallimagesPathParams;
}(SpeakeasyBase));
export { DeleteSetupV1LocationsIdDeleteallimagesPathParams };
var DeleteSetupV1LocationsIdDeleteallimagesQueryParams = /** @class */ (function (_super) {
    __extends(DeleteSetupV1LocationsIdDeleteallimagesQueryParams, _super);
    function DeleteSetupV1LocationsIdDeleteallimagesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uppercase" }),
        __metadata("design:type", Boolean)
    ], DeleteSetupV1LocationsIdDeleteallimagesQueryParams.prototype, "uppercase", void 0);
    return DeleteSetupV1LocationsIdDeleteallimagesQueryParams;
}(SpeakeasyBase));
export { DeleteSetupV1LocationsIdDeleteallimagesQueryParams };
var DeleteSetupV1LocationsIdDeleteallimagesRequest = /** @class */ (function (_super) {
    __extends(DeleteSetupV1LocationsIdDeleteallimagesRequest, _super);
    function DeleteSetupV1LocationsIdDeleteallimagesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteSetupV1LocationsIdDeleteallimagesPathParams)
    ], DeleteSetupV1LocationsIdDeleteallimagesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteSetupV1LocationsIdDeleteallimagesQueryParams)
    ], DeleteSetupV1LocationsIdDeleteallimagesRequest.prototype, "queryParams", void 0);
    return DeleteSetupV1LocationsIdDeleteallimagesRequest;
}(SpeakeasyBase));
export { DeleteSetupV1LocationsIdDeleteallimagesRequest };
var DeleteSetupV1LocationsIdDeleteallimagesResponse = /** @class */ (function (_super) {
    __extends(DeleteSetupV1LocationsIdDeleteallimagesResponse, _super);
    function DeleteSetupV1LocationsIdDeleteallimagesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteSetupV1LocationsIdDeleteallimagesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], DeleteSetupV1LocationsIdDeleteallimagesResponse.prototype, "deleteSetupV1LocationsIdDeleteallimages200ApplicationJsonBoolean", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteSetupV1LocationsIdDeleteallimagesResponse.prototype, "statusCode", void 0);
    return DeleteSetupV1LocationsIdDeleteallimagesResponse;
}(SpeakeasyBase));
export { DeleteSetupV1LocationsIdDeleteallimagesResponse };
