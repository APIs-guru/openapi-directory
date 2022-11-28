import { SpeakeasyBase } from "../../../internal/utils";
import { ManualRuleGroup } from "./manualrulegroup";
/**
 * Allows you to manually organize the values in a source data column into buckets with names of your choosing. For example, a pivot table that aggregates population by state: +-------+-------------------+ | State | SUM of Population | +-------+-------------------+ | AK | 0.7 | | AL | 4.8 | | AR | 2.9 | ... +-------+-------------------+ could be turned into a pivot table that aggregates population by time zone by providing a list of groups (for example, groupName = 'Central', items = ['AL', 'AR', 'IA', ...]) to a manual group rule. Note that a similar effect could be achieved by adding a time zone column to the source data and adjusting the pivot table. +-----------+-------------------+ | Time Zone | SUM of Population | +-----------+-------------------+ | Central | 106.3 | | Eastern | 151.9 | | Mountain | 17.4 | ... +-----------+-------------------+
**/
export declare class ManualRule extends SpeakeasyBase {
    groups?: ManualRuleGroup[];
}
