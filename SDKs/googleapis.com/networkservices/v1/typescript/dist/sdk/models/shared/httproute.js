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
import { HttpRouteRouteRule } from "./httprouterouterule";
// HttpRoute
/**
 * HttpRoute is the resource defining how HTTP traffic should be routed by a Mesh or Gateway resource.
**/
var HttpRoute = /** @class */ (function (_super) {
    __extends(HttpRoute, _super);
    function HttpRoute() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], HttpRoute.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], HttpRoute.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gateways" }),
        __metadata("design:type", Array)
    ], HttpRoute.prototype, "gateways", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hostnames" }),
        __metadata("design:type", Array)
    ], HttpRoute.prototype, "hostnames", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], HttpRoute.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meshes" }),
        __metadata("design:type", Array)
    ], HttpRoute.prototype, "meshes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], HttpRoute.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rules", elemType: HttpRouteRouteRule }),
        __metadata("design:type", Array)
    ], HttpRoute.prototype, "rules", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=selfLink" }),
        __metadata("design:type", String)
    ], HttpRoute.prototype, "selfLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], HttpRoute.prototype, "updateTime", void 0);
    return HttpRoute;
}(SpeakeasyBase));
export { HttpRoute };
// HttpRouteInput
/**
 * HttpRoute is the resource defining how HTTP traffic should be routed by a Mesh or Gateway resource.
**/
var HttpRouteInput = /** @class */ (function (_super) {
    __extends(HttpRouteInput, _super);
    function HttpRouteInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], HttpRouteInput.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gateways" }),
        __metadata("design:type", Array)
    ], HttpRouteInput.prototype, "gateways", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hostnames" }),
        __metadata("design:type", Array)
    ], HttpRouteInput.prototype, "hostnames", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], HttpRouteInput.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meshes" }),
        __metadata("design:type", Array)
    ], HttpRouteInput.prototype, "meshes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], HttpRouteInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rules", elemType: HttpRouteRouteRule }),
        __metadata("design:type", Array)
    ], HttpRouteInput.prototype, "rules", void 0);
    return HttpRouteInput;
}(SpeakeasyBase));
export { HttpRouteInput };
