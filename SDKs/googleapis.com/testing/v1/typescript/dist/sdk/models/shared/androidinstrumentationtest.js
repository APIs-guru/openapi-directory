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
import { FileReference } from "./filereference";
import { AppBundle } from "./appbundle";
import { ShardingOption } from "./shardingoption";
export var AndroidInstrumentationTestOrchestratorOptionEnum;
(function (AndroidInstrumentationTestOrchestratorOptionEnum) {
    AndroidInstrumentationTestOrchestratorOptionEnum["OrchestratorOptionUnspecified"] = "ORCHESTRATOR_OPTION_UNSPECIFIED";
    AndroidInstrumentationTestOrchestratorOptionEnum["UseOrchestrator"] = "USE_ORCHESTRATOR";
    AndroidInstrumentationTestOrchestratorOptionEnum["DoNotUseOrchestrator"] = "DO_NOT_USE_ORCHESTRATOR";
})(AndroidInstrumentationTestOrchestratorOptionEnum || (AndroidInstrumentationTestOrchestratorOptionEnum = {}));
// AndroidInstrumentationTest
/**
 * A test of an Android application that can control an Android component independently of its normal lifecycle. Android instrumentation tests run an application APK and test APK inside the same process on a virtual or physical AndroidDevice. They also specify a test runner class, such as com.google.GoogleTestRunner, which can vary on the specific instrumentation framework chosen. See for more information on types of Android tests.
**/
var AndroidInstrumentationTest = /** @class */ (function (_super) {
    __extends(AndroidInstrumentationTest, _super);
    function AndroidInstrumentationTest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=appApk" }),
        __metadata("design:type", FileReference)
    ], AndroidInstrumentationTest.prototype, "appApk", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=appBundle" }),
        __metadata("design:type", AppBundle)
    ], AndroidInstrumentationTest.prototype, "appBundle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=appPackageId" }),
        __metadata("design:type", String)
    ], AndroidInstrumentationTest.prototype, "appPackageId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=orchestratorOption" }),
        __metadata("design:type", String)
    ], AndroidInstrumentationTest.prototype, "orchestratorOption", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shardingOption" }),
        __metadata("design:type", ShardingOption)
    ], AndroidInstrumentationTest.prototype, "shardingOption", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=testApk" }),
        __metadata("design:type", FileReference)
    ], AndroidInstrumentationTest.prototype, "testApk", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=testPackageId" }),
        __metadata("design:type", String)
    ], AndroidInstrumentationTest.prototype, "testPackageId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=testRunnerClass" }),
        __metadata("design:type", String)
    ], AndroidInstrumentationTest.prototype, "testRunnerClass", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=testTargets" }),
        __metadata("design:type", Array)
    ], AndroidInstrumentationTest.prototype, "testTargets", void 0);
    return AndroidInstrumentationTest;
}(SpeakeasyBase));
export { AndroidInstrumentationTest };
