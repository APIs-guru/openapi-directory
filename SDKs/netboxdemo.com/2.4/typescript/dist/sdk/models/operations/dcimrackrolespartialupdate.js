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
var DcimRackRolesPartialUpdatePathParams = /** @class */ (function (_super) {
    __extends(DcimRackRolesPartialUpdatePathParams, _super);
    function DcimRackRolesPartialUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], DcimRackRolesPartialUpdatePathParams.prototype, "id", void 0);
    return DcimRackRolesPartialUpdatePathParams;
}(SpeakeasyBase));
export { DcimRackRolesPartialUpdatePathParams };
var DcimRackRolesPartialUpdateRequest = /** @class */ (function (_super) {
    __extends(DcimRackRolesPartialUpdateRequest, _super);
    function DcimRackRolesPartialUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DcimRackRolesPartialUpdatePathParams)
    ], DcimRackRolesPartialUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.RackRoleInput)
    ], DcimRackRolesPartialUpdateRequest.prototype, "request", void 0);
    return DcimRackRolesPartialUpdateRequest;
}(SpeakeasyBase));
export { DcimRackRolesPartialUpdateRequest };
var DcimRackRolesPartialUpdateResponse = /** @class */ (function (_super) {
    __extends(DcimRackRolesPartialUpdateResponse, _super);
    function DcimRackRolesPartialUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DcimRackRolesPartialUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.RackRole)
    ], DcimRackRolesPartialUpdateResponse.prototype, "rackRole", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DcimRackRolesPartialUpdateResponse.prototype, "statusCode", void 0);
    return DcimRackRolesPartialUpdateResponse;
}(SpeakeasyBase));
export { DcimRackRolesPartialUpdateResponse };
