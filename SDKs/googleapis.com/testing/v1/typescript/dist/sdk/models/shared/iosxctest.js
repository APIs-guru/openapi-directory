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
// IosXcTest
/**
 * A test of an iOS application that uses the XCTest framework. Xcode supports the option to "build for testing", which generates an .xctestrun file that contains a test specification (arguments, test methods, etc). This test type accepts a zip file containing the .xctestrun file and the corresponding contents of the Build/Products directory that contains all the binaries needed to run the tests.
**/
var IosXcTest = /** @class */ (function (_super) {
    __extends(IosXcTest, _super);
    function IosXcTest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=appBundleId" }),
        __metadata("design:type", String)
    ], IosXcTest.prototype, "appBundleId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=testSpecialEntitlements" }),
        __metadata("design:type", Boolean)
    ], IosXcTest.prototype, "testSpecialEntitlements", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=testsZip" }),
        __metadata("design:type", FileReference)
    ], IosXcTest.prototype, "testsZip", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=xcodeVersion" }),
        __metadata("design:type", String)
    ], IosXcTest.prototype, "xcodeVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=xctestrun" }),
        __metadata("design:type", FileReference)
    ], IosXcTest.prototype, "xctestrun", void 0);
    return IosXcTest;
}(SpeakeasyBase));
export { IosXcTest };
