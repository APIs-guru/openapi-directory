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
var DcimRackGroupsDeletePathParams = /** @class */ (function (_super) {
    __extends(DcimRackGroupsDeletePathParams, _super);
    function DcimRackGroupsDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], DcimRackGroupsDeletePathParams.prototype, "id", void 0);
    return DcimRackGroupsDeletePathParams;
}(SpeakeasyBase));
export { DcimRackGroupsDeletePathParams };
var DcimRackGroupsDeleteRequest = /** @class */ (function (_super) {
    __extends(DcimRackGroupsDeleteRequest, _super);
    function DcimRackGroupsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DcimRackGroupsDeletePathParams)
    ], DcimRackGroupsDeleteRequest.prototype, "pathParams", void 0);
    return DcimRackGroupsDeleteRequest;
}(SpeakeasyBase));
export { DcimRackGroupsDeleteRequest };
var DcimRackGroupsDeleteResponse = /** @class */ (function (_super) {
    __extends(DcimRackGroupsDeleteResponse, _super);
    function DcimRackGroupsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DcimRackGroupsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DcimRackGroupsDeleteResponse.prototype, "statusCode", void 0);
    return DcimRackGroupsDeleteResponse;
}(SpeakeasyBase));
export { DcimRackGroupsDeleteResponse };
