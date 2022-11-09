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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
export var IosAppStateEnum;
(function (IosAppStateEnum) {
    IosAppStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    IosAppStateEnum["Active"] = "ACTIVE";
    IosAppStateEnum["Deleted"] = "DELETED";
})(IosAppStateEnum || (IosAppStateEnum = {}));
// IosApp
/**
 * Details of a Firebase App for iOS.
**/
var IosApp = /** @class */ (function (_super) {
    __extends(IosApp, _super);
    function IosApp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=apiKeyId" }),
        __metadata("design:type", String)
    ], IosApp.prototype, "apiKeyId", void 0);
    __decorate([
        Metadata({ data: "json, name=appId" }),
        __metadata("design:type", String)
    ], IosApp.prototype, "appId", void 0);
    __decorate([
        Metadata({ data: "json, name=appStoreId" }),
        __metadata("design:type", String)
    ], IosApp.prototype, "appStoreId", void 0);
    __decorate([
        Metadata({ data: "json, name=bundleId" }),
        __metadata("design:type", String)
    ], IosApp.prototype, "bundleId", void 0);
    __decorate([
        Metadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], IosApp.prototype, "displayName", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], IosApp.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=projectId" }),
        __metadata("design:type", String)
    ], IosApp.prototype, "projectId", void 0);
    __decorate([
        Metadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], IosApp.prototype, "state", void 0);
    __decorate([
        Metadata({ data: "json, name=teamId" }),
        __metadata("design:type", String)
    ], IosApp.prototype, "teamId", void 0);
    return IosApp;
}(SpeakeasyBase));
export { IosApp };
