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
import { GrpcRouteRouteRule } from "./grpcrouterouterule";
// GrpcRoute
/**
 * GrpcRoute is the resource defining how gRPC traffic routed by a Mesh or Gateway resource is routed.
**/
var GrpcRoute = /** @class */ (function (_super) {
    __extends(GrpcRoute, _super);
    function GrpcRoute() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], GrpcRoute.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GrpcRoute.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gateways" }),
        __metadata("design:type", Array)
    ], GrpcRoute.prototype, "gateways", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hostnames" }),
        __metadata("design:type", Array)
    ], GrpcRoute.prototype, "hostnames", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], GrpcRoute.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meshes" }),
        __metadata("design:type", Array)
    ], GrpcRoute.prototype, "meshes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GrpcRoute.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rules", elemType: GrpcRouteRouteRule }),
        __metadata("design:type", Array)
    ], GrpcRoute.prototype, "rules", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=selfLink" }),
        __metadata("design:type", String)
    ], GrpcRoute.prototype, "selfLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], GrpcRoute.prototype, "updateTime", void 0);
    return GrpcRoute;
}(SpeakeasyBase));
export { GrpcRoute };
// GrpcRouteInput
/**
 * GrpcRoute is the resource defining how gRPC traffic routed by a Mesh or Gateway resource is routed.
**/
var GrpcRouteInput = /** @class */ (function (_super) {
    __extends(GrpcRouteInput, _super);
    function GrpcRouteInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GrpcRouteInput.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gateways" }),
        __metadata("design:type", Array)
    ], GrpcRouteInput.prototype, "gateways", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hostnames" }),
        __metadata("design:type", Array)
    ], GrpcRouteInput.prototype, "hostnames", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], GrpcRouteInput.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meshes" }),
        __metadata("design:type", Array)
    ], GrpcRouteInput.prototype, "meshes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GrpcRouteInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rules", elemType: GrpcRouteRouteRule }),
        __metadata("design:type", Array)
    ], GrpcRouteInput.prototype, "rules", void 0);
    return GrpcRouteInput;
}(SpeakeasyBase));
export { GrpcRouteInput };
