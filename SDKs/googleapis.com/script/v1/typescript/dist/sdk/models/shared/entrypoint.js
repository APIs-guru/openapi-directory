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
import { GoogleAppsScriptTypeAddOnEntryPoint } from "./googleappsscripttypeaddonentrypoint";
import { GoogleAppsScriptTypeExecutionApiEntryPoint } from "./googleappsscripttypeexecutionapientrypoint";
import { GoogleAppsScriptTypeWebAppEntryPoint } from "./googleappsscripttypewebappentrypoint";
export var EntryPointEntryPointTypeEnum;
(function (EntryPointEntryPointTypeEnum) {
    EntryPointEntryPointTypeEnum["EntryPointTypeUnspecified"] = "ENTRY_POINT_TYPE_UNSPECIFIED";
    EntryPointEntryPointTypeEnum["WebApp"] = "WEB_APP";
    EntryPointEntryPointTypeEnum["ExecutionApi"] = "EXECUTION_API";
    EntryPointEntryPointTypeEnum["AddOn"] = "ADD_ON";
})(EntryPointEntryPointTypeEnum || (EntryPointEntryPointTypeEnum = {}));
// EntryPoint
/**
 * A configuration that defines how a deployment is accessed externally.
**/
var EntryPoint = /** @class */ (function (_super) {
    __extends(EntryPoint, _super);
    function EntryPoint() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=addOn" }),
        __metadata("design:type", GoogleAppsScriptTypeAddOnEntryPoint)
    ], EntryPoint.prototype, "addOn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=entryPointType" }),
        __metadata("design:type", String)
    ], EntryPoint.prototype, "entryPointType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=executionApi" }),
        __metadata("design:type", GoogleAppsScriptTypeExecutionApiEntryPoint)
    ], EntryPoint.prototype, "executionApi", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=webApp" }),
        __metadata("design:type", GoogleAppsScriptTypeWebAppEntryPoint)
    ], EntryPoint.prototype, "webApp", void 0);
    return EntryPoint;
}(SpeakeasyBase));
export { EntryPoint };
