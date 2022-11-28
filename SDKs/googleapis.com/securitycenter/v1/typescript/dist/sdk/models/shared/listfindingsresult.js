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
import { Finding } from "./finding";
import { Resource } from "./resource";
export var ListFindingsResultStateChangeEnum;
(function (ListFindingsResultStateChangeEnum) {
    ListFindingsResultStateChangeEnum["Unused"] = "UNUSED";
    ListFindingsResultStateChangeEnum["Changed"] = "CHANGED";
    ListFindingsResultStateChangeEnum["Unchanged"] = "UNCHANGED";
    ListFindingsResultStateChangeEnum["Added"] = "ADDED";
    ListFindingsResultStateChangeEnum["Removed"] = "REMOVED";
})(ListFindingsResultStateChangeEnum || (ListFindingsResultStateChangeEnum = {}));
// ListFindingsResult
/**
 * Result containing the Finding and its StateChange.
**/
var ListFindingsResult = /** @class */ (function (_super) {
    __extends(ListFindingsResult, _super);
    function ListFindingsResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=finding" }),
        __metadata("design:type", Finding)
    ], ListFindingsResult.prototype, "finding", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resource" }),
        __metadata("design:type", Resource)
    ], ListFindingsResult.prototype, "resource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stateChange" }),
        __metadata("design:type", String)
    ], ListFindingsResult.prototype, "stateChange", void 0);
    return ListFindingsResult;
}(SpeakeasyBase));
export { ListFindingsResult };
