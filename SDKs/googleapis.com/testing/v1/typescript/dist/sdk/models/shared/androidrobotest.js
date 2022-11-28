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
import { RoboDirective } from "./robodirective";
import { RoboStartingIntent } from "./robostartingintent";
export var AndroidRoboTestRoboModeEnum;
(function (AndroidRoboTestRoboModeEnum) {
    AndroidRoboTestRoboModeEnum["RoboModeUnspecified"] = "ROBO_MODE_UNSPECIFIED";
    AndroidRoboTestRoboModeEnum["RoboVersion1"] = "ROBO_VERSION_1";
    AndroidRoboTestRoboModeEnum["RoboVersion2"] = "ROBO_VERSION_2";
})(AndroidRoboTestRoboModeEnum || (AndroidRoboTestRoboModeEnum = {}));
// AndroidRoboTest
/**
 * A test of an android application that explores the application on a virtual or physical Android Device, finding culprits and crashes as it goes.
**/
var AndroidRoboTest = /** @class */ (function (_super) {
    __extends(AndroidRoboTest, _super);
    function AndroidRoboTest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=appApk" }),
        __metadata("design:type", FileReference)
    ], AndroidRoboTest.prototype, "appApk", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=appBundle" }),
        __metadata("design:type", AppBundle)
    ], AndroidRoboTest.prototype, "appBundle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=appInitialActivity" }),
        __metadata("design:type", String)
    ], AndroidRoboTest.prototype, "appInitialActivity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=appPackageId" }),
        __metadata("design:type", String)
    ], AndroidRoboTest.prototype, "appPackageId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxDepth" }),
        __metadata("design:type", Number)
    ], AndroidRoboTest.prototype, "maxDepth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxSteps" }),
        __metadata("design:type", Number)
    ], AndroidRoboTest.prototype, "maxSteps", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=roboDirectives", elemType: RoboDirective }),
        __metadata("design:type", Array)
    ], AndroidRoboTest.prototype, "roboDirectives", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=roboMode" }),
        __metadata("design:type", String)
    ], AndroidRoboTest.prototype, "roboMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=roboScript" }),
        __metadata("design:type", FileReference)
    ], AndroidRoboTest.prototype, "roboScript", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startingIntents", elemType: RoboStartingIntent }),
        __metadata("design:type", Array)
    ], AndroidRoboTest.prototype, "startingIntents", void 0);
    return AndroidRoboTest;
}(SpeakeasyBase));
export { AndroidRoboTest };
