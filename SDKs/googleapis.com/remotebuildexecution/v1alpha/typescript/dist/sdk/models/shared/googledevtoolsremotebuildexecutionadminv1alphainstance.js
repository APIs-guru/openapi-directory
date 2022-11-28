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
import { GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicy } from "./googledevtoolsremotebuildexecutionadminv1alphafeaturepolicy";
export var GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstanceStateEnum;
(function (GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstanceStateEnum) {
    GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstanceStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstanceStateEnum["Creating"] = "CREATING";
    GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstanceStateEnum["Running"] = "RUNNING";
    GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstanceStateEnum["Inactive"] = "INACTIVE";
})(GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstanceStateEnum || (GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstanceStateEnum = {}));
// GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstance
/**
 * Instance conceptually encapsulates all Remote Build Execution resources for remote builds. An instance consists of storage and compute resources (for example, `ContentAddressableStorage`, `ActionCache`, `WorkerPools`) used for running remote builds. All Remote Build Execution API calls are scoped to an instance.
**/
var GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstance = /** @class */ (function (_super) {
    __extends(GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstance, _super);
    function GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstance() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=featurePolicy" }),
        __metadata("design:type", GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicy)
    ], GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstance.prototype, "featurePolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location" }),
        __metadata("design:type", String)
    ], GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstance.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=loggingEnabled" }),
        __metadata("design:type", Boolean)
    ], GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstance.prototype, "loggingEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstance.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstance.prototype, "state", void 0);
    return GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstance;
}(SpeakeasyBase));
export { GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstance };
