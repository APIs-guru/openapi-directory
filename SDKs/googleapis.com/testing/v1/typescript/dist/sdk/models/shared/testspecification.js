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
import { AndroidInstrumentationTest } from "./androidinstrumentationtest";
import { AndroidRoboTest } from "./androidrobotest";
import { AndroidTestLoop } from "./androidtestloop";
import { IosTestLoop } from "./iostestloop";
import { IosTestSetup } from "./iostestsetup";
import { IosXcTest } from "./iosxctest";
import { TestSetup } from "./testsetup";
// TestSpecification
/**
 * A description of how to run the test.
**/
var TestSpecification = /** @class */ (function (_super) {
    __extends(TestSpecification, _super);
    function TestSpecification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=androidInstrumentationTest" }),
        __metadata("design:type", AndroidInstrumentationTest)
    ], TestSpecification.prototype, "androidInstrumentationTest", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=androidRoboTest" }),
        __metadata("design:type", AndroidRoboTest)
    ], TestSpecification.prototype, "androidRoboTest", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=androidTestLoop" }),
        __metadata("design:type", AndroidTestLoop)
    ], TestSpecification.prototype, "androidTestLoop", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disablePerformanceMetrics" }),
        __metadata("design:type", Boolean)
    ], TestSpecification.prototype, "disablePerformanceMetrics", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disableVideoRecording" }),
        __metadata("design:type", Boolean)
    ], TestSpecification.prototype, "disableVideoRecording", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=iosTestLoop" }),
        __metadata("design:type", IosTestLoop)
    ], TestSpecification.prototype, "iosTestLoop", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=iosTestSetup" }),
        __metadata("design:type", IosTestSetup)
    ], TestSpecification.prototype, "iosTestSetup", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=iosXcTest" }),
        __metadata("design:type", IosXcTest)
    ], TestSpecification.prototype, "iosXcTest", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=testSetup" }),
        __metadata("design:type", TestSetup)
    ], TestSpecification.prototype, "testSetup", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=testTimeout" }),
        __metadata("design:type", String)
    ], TestSpecification.prototype, "testTimeout", void 0);
    return TestSpecification;
}(SpeakeasyBase));
export { TestSpecification };
