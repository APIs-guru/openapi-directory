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
import { Endpoint } from "./endpoint";
import { ReachabilityDetails } from "./reachabilitydetails";
// ConnectivityTest
/**
 * A Connectivity Test for a network reachability analysis.
**/
var ConnectivityTest = /** @class */ (function (_super) {
    __extends(ConnectivityTest, _super);
    function ConnectivityTest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], ConnectivityTest.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], ConnectivityTest.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=destination" }),
        __metadata("design:type", Endpoint)
    ], ConnectivityTest.prototype, "destination", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], ConnectivityTest.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], ConnectivityTest.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ConnectivityTest.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=protocol" }),
        __metadata("design:type", String)
    ], ConnectivityTest.prototype, "protocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reachabilityDetails" }),
        __metadata("design:type", ReachabilityDetails)
    ], ConnectivityTest.prototype, "reachabilityDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=relatedProjects" }),
        __metadata("design:type", Array)
    ], ConnectivityTest.prototype, "relatedProjects", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=source" }),
        __metadata("design:type", Endpoint)
    ], ConnectivityTest.prototype, "source", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], ConnectivityTest.prototype, "updateTime", void 0);
    return ConnectivityTest;
}(SpeakeasyBase));
export { ConnectivityTest };
// ConnectivityTestInput
/**
 * A Connectivity Test for a network reachability analysis.
**/
var ConnectivityTestInput = /** @class */ (function (_super) {
    __extends(ConnectivityTestInput, _super);
    function ConnectivityTestInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], ConnectivityTestInput.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=destination" }),
        __metadata("design:type", Endpoint)
    ], ConnectivityTestInput.prototype, "destination", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], ConnectivityTestInput.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ConnectivityTestInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=protocol" }),
        __metadata("design:type", String)
    ], ConnectivityTestInput.prototype, "protocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reachabilityDetails" }),
        __metadata("design:type", ReachabilityDetails)
    ], ConnectivityTestInput.prototype, "reachabilityDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=relatedProjects" }),
        __metadata("design:type", Array)
    ], ConnectivityTestInput.prototype, "relatedProjects", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=source" }),
        __metadata("design:type", Endpoint)
    ], ConnectivityTestInput.prototype, "source", void 0);
    return ConnectivityTestInput;
}(SpeakeasyBase));
export { ConnectivityTestInput };
