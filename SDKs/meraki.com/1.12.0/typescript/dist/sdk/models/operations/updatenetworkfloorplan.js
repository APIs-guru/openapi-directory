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
var UpdateNetworkFloorPlanPathParams = /** @class */ (function (_super) {
    __extends(UpdateNetworkFloorPlanPathParams, _super);
    function UpdateNetworkFloorPlanPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=floorPlanId" }),
        __metadata("design:type", String)
    ], UpdateNetworkFloorPlanPathParams.prototype, "floorPlanId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], UpdateNetworkFloorPlanPathParams.prototype, "networkId", void 0);
    return UpdateNetworkFloorPlanPathParams;
}(SpeakeasyBase));
export { UpdateNetworkFloorPlanPathParams };
// UpdateNetworkFloorPlanRequestBodyBottomLeftCorner
/**
 * The longitude and latitude of the bottom left corner of your floor plan.
**/
var UpdateNetworkFloorPlanRequestBodyBottomLeftCorner = /** @class */ (function (_super) {
    __extends(UpdateNetworkFloorPlanRequestBodyBottomLeftCorner, _super);
    function UpdateNetworkFloorPlanRequestBodyBottomLeftCorner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lat" }),
        __metadata("design:type", Number)
    ], UpdateNetworkFloorPlanRequestBodyBottomLeftCorner.prototype, "lat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lng" }),
        __metadata("design:type", Number)
    ], UpdateNetworkFloorPlanRequestBodyBottomLeftCorner.prototype, "lng", void 0);
    return UpdateNetworkFloorPlanRequestBodyBottomLeftCorner;
}(SpeakeasyBase));
export { UpdateNetworkFloorPlanRequestBodyBottomLeftCorner };
// UpdateNetworkFloorPlanRequestBodyBottomRightCorner
/**
 * The longitude and latitude of the bottom right corner of your floor plan.
**/
var UpdateNetworkFloorPlanRequestBodyBottomRightCorner = /** @class */ (function (_super) {
    __extends(UpdateNetworkFloorPlanRequestBodyBottomRightCorner, _super);
    function UpdateNetworkFloorPlanRequestBodyBottomRightCorner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lat" }),
        __metadata("design:type", Number)
    ], UpdateNetworkFloorPlanRequestBodyBottomRightCorner.prototype, "lat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lng" }),
        __metadata("design:type", Number)
    ], UpdateNetworkFloorPlanRequestBodyBottomRightCorner.prototype, "lng", void 0);
    return UpdateNetworkFloorPlanRequestBodyBottomRightCorner;
}(SpeakeasyBase));
export { UpdateNetworkFloorPlanRequestBodyBottomRightCorner };
// UpdateNetworkFloorPlanRequestBodyCenter
/**
 * The longitude and latitude of the center of your floor plan. If you want to change the geolocation data of your floor plan, either the 'center' or two adjacent corners (e.g. 'topLeftCorner' and 'bottomLeftCorner') must be specified. If 'center' is specified, the floor plan is placed over that point with no rotation. If two adjacent corners are specified, the floor plan is rotated to line up with the two specified points. The aspect ratio of the floor plan's image is preserved regardless of which corners/center are specified. (This means if that more than two corners are specified, only two corners may be used to preserve the floor plan's aspect ratio.). No two points can have the same latitude, longitude pair.
**/
var UpdateNetworkFloorPlanRequestBodyCenter = /** @class */ (function (_super) {
    __extends(UpdateNetworkFloorPlanRequestBodyCenter, _super);
    function UpdateNetworkFloorPlanRequestBodyCenter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lat" }),
        __metadata("design:type", Number)
    ], UpdateNetworkFloorPlanRequestBodyCenter.prototype, "lat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lng" }),
        __metadata("design:type", Number)
    ], UpdateNetworkFloorPlanRequestBodyCenter.prototype, "lng", void 0);
    return UpdateNetworkFloorPlanRequestBodyCenter;
}(SpeakeasyBase));
export { UpdateNetworkFloorPlanRequestBodyCenter };
// UpdateNetworkFloorPlanRequestBodyTopLeftCorner
/**
 * The longitude and latitude of the top left corner of your floor plan.
**/
var UpdateNetworkFloorPlanRequestBodyTopLeftCorner = /** @class */ (function (_super) {
    __extends(UpdateNetworkFloorPlanRequestBodyTopLeftCorner, _super);
    function UpdateNetworkFloorPlanRequestBodyTopLeftCorner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lat" }),
        __metadata("design:type", Number)
    ], UpdateNetworkFloorPlanRequestBodyTopLeftCorner.prototype, "lat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lng" }),
        __metadata("design:type", Number)
    ], UpdateNetworkFloorPlanRequestBodyTopLeftCorner.prototype, "lng", void 0);
    return UpdateNetworkFloorPlanRequestBodyTopLeftCorner;
}(SpeakeasyBase));
export { UpdateNetworkFloorPlanRequestBodyTopLeftCorner };
// UpdateNetworkFloorPlanRequestBodyTopRightCorner
/**
 * The longitude and latitude of the top right corner of your floor plan.
**/
var UpdateNetworkFloorPlanRequestBodyTopRightCorner = /** @class */ (function (_super) {
    __extends(UpdateNetworkFloorPlanRequestBodyTopRightCorner, _super);
    function UpdateNetworkFloorPlanRequestBodyTopRightCorner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lat" }),
        __metadata("design:type", Number)
    ], UpdateNetworkFloorPlanRequestBodyTopRightCorner.prototype, "lat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lng" }),
        __metadata("design:type", Number)
    ], UpdateNetworkFloorPlanRequestBodyTopRightCorner.prototype, "lng", void 0);
    return UpdateNetworkFloorPlanRequestBodyTopRightCorner;
}(SpeakeasyBase));
export { UpdateNetworkFloorPlanRequestBodyTopRightCorner };
var UpdateNetworkFloorPlanRequestBody = /** @class */ (function (_super) {
    __extends(UpdateNetworkFloorPlanRequestBody, _super);
    function UpdateNetworkFloorPlanRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bottomLeftCorner" }),
        __metadata("design:type", UpdateNetworkFloorPlanRequestBodyBottomLeftCorner)
    ], UpdateNetworkFloorPlanRequestBody.prototype, "bottomLeftCorner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bottomRightCorner" }),
        __metadata("design:type", UpdateNetworkFloorPlanRequestBodyBottomRightCorner)
    ], UpdateNetworkFloorPlanRequestBody.prototype, "bottomRightCorner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=center" }),
        __metadata("design:type", UpdateNetworkFloorPlanRequestBodyCenter)
    ], UpdateNetworkFloorPlanRequestBody.prototype, "center", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=imageContents" }),
        __metadata("design:type", String)
    ], UpdateNetworkFloorPlanRequestBody.prototype, "imageContents", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UpdateNetworkFloorPlanRequestBody.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=topLeftCorner" }),
        __metadata("design:type", UpdateNetworkFloorPlanRequestBodyTopLeftCorner)
    ], UpdateNetworkFloorPlanRequestBody.prototype, "topLeftCorner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=topRightCorner" }),
        __metadata("design:type", UpdateNetworkFloorPlanRequestBodyTopRightCorner)
    ], UpdateNetworkFloorPlanRequestBody.prototype, "topRightCorner", void 0);
    return UpdateNetworkFloorPlanRequestBody;
}(SpeakeasyBase));
export { UpdateNetworkFloorPlanRequestBody };
var UpdateNetworkFloorPlanRequest = /** @class */ (function (_super) {
    __extends(UpdateNetworkFloorPlanRequest, _super);
    function UpdateNetworkFloorPlanRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateNetworkFloorPlanPathParams)
    ], UpdateNetworkFloorPlanRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateNetworkFloorPlanRequestBody)
    ], UpdateNetworkFloorPlanRequest.prototype, "request", void 0);
    return UpdateNetworkFloorPlanRequest;
}(SpeakeasyBase));
export { UpdateNetworkFloorPlanRequest };
var UpdateNetworkFloorPlanResponse = /** @class */ (function (_super) {
    __extends(UpdateNetworkFloorPlanResponse, _super);
    function UpdateNetworkFloorPlanResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateNetworkFloorPlanResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateNetworkFloorPlanResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], UpdateNetworkFloorPlanResponse.prototype, "updateNetworkFloorPlan200ApplicationJsonObject", void 0);
    return UpdateNetworkFloorPlanResponse;
}(SpeakeasyBase));
export { UpdateNetworkFloorPlanResponse };
