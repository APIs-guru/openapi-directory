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
import { InstanceAndroidDetails } from "./instanceandroiddetails";
import { InstanceIosDetails } from "./instanceiosdetails";
import { InstanceWebDetails } from "./instancewebdetails";
export var InstancePlatformTypeEnum;
(function (InstancePlatformTypeEnum) {
    InstancePlatformTypeEnum["PlatformTypeUnspecified"] = "PLATFORM_TYPE_UNSPECIFIED";
    InstancePlatformTypeEnum["Android"] = "ANDROID";
    InstancePlatformTypeEnum["Ios"] = "IOS";
    InstancePlatformTypeEnum["WebApp"] = "WEB_APP";
})(InstancePlatformTypeEnum || (InstancePlatformTypeEnum = {}));
// Instance
/**
 * The Instance resource.
**/
var Instance = /** @class */ (function (_super) {
    __extends(Instance, _super);
    function Instance() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=acquisitionUri" }),
        __metadata("design:type", String)
    ], Instance.prototype, "acquisitionUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=androidInstance" }),
        __metadata("design:type", InstanceAndroidDetails)
    ], Instance.prototype, "androidInstance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=iosInstance" }),
        __metadata("design:type", InstanceIosDetails)
    ], Instance.prototype, "iosInstance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], Instance.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Instance.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=platformType" }),
        __metadata("design:type", String)
    ], Instance.prototype, "platformType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=realtimePlay" }),
        __metadata("design:type", Boolean)
    ], Instance.prototype, "realtimePlay", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=turnBasedPlay" }),
        __metadata("design:type", Boolean)
    ], Instance.prototype, "turnBasedPlay", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=webInstance" }),
        __metadata("design:type", InstanceWebDetails)
    ], Instance.prototype, "webInstance", void 0);
    return Instance;
}(SpeakeasyBase));
export { Instance };
