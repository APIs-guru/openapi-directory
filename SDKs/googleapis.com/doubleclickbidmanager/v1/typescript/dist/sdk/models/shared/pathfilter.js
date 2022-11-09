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
import * as shared from "../shared";
export var PathFilterPathMatchPositionEnum;
(function (PathFilterPathMatchPositionEnum) {
    PathFilterPathMatchPositionEnum["Any"] = "ANY";
    PathFilterPathMatchPositionEnum["First"] = "FIRST";
    PathFilterPathMatchPositionEnum["Last"] = "LAST";
})(PathFilterPathMatchPositionEnum || (PathFilterPathMatchPositionEnum = {}));
// PathFilter
/**
 * Path filters specify which paths to include in a report. A path is the result of combining DV360 events based on User ID to create a workflow of users' actions. When a path filter is set, the resulting report will only include paths that match the specified event at the specified position. All other paths will be excluded.
**/
var PathFilter = /** @class */ (function (_super) {
    __extends(PathFilter, _super);
    function PathFilter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=eventFilters", elemType: shared.EventFilter }),
        __metadata("design:type", Array)
    ], PathFilter.prototype, "eventFilters", void 0);
    __decorate([
        Metadata({ data: "json, name=pathMatchPosition" }),
        __metadata("design:type", String)
    ], PathFilter.prototype, "pathMatchPosition", void 0);
    return PathFilter;
}(SpeakeasyBase));
export { PathFilter };
