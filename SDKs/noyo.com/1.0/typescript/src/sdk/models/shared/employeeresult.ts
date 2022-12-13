import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EmployeeResultEmploymentEmploymentDates
/** 
 * Employee employment dates
**/
export class EmployeeResultEmploymentEmploymentDates extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=full_time_start" })
  fullTimeStart?: string;

  @SpeakeasyMetadata({ data: "json, name=hire_date" })
  hireDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=rehire" })
  rehire?: string;

  @SpeakeasyMetadata({ data: "json, name=retirement" })
  retirement?: string;

  @SpeakeasyMetadata({ data: "json, name=terminated" })
  terminated?: string;
}

export enum EmployeeResultEmploymentEmploymentStatusEnum {
    Contract = "contract",
    Disabled = "disabled",
    FullTime = "full-time",
    PartTime = "part-time",
    Retired = "retired",
    Terminated = "terminated"
}

export enum EmployeeResultEmploymentSalaryTypeEnum {
    Hourly = "hourly",
    Salary = "salary"
}

export enum EmployeeResultEmploymentSalaryUnitEnum {
    Annual = "annual",
    Hour = "hour",
    Month = "month",
    SemiMonthly = "semi-monthly",
    Week = "week"
}


// EmployeeResultEmploymentSalary
/** 
 * Employee salary information
**/
export class EmployeeResultEmploymentSalary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: EmployeeResultEmploymentSalaryTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=unit" })
  unit?: EmployeeResultEmploymentSalaryUnitEnum;
}


// EmployeeResultEmployment
/** 
 * Employment information for the employee
**/
export class EmployeeResultEmployment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=employment_dates" })
  employmentDates?: EmployeeResultEmploymentEmploymentDates;

  @SpeakeasyMetadata({ data: "json, name=employment_status" })
  employmentStatus?: EmployeeResultEmploymentEmploymentStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=hours_worked" })
  hoursWorked?: number;

  @SpeakeasyMetadata({ data: "json, name=occupation" })
  occupation?: string;

  @SpeakeasyMetadata({ data: "json, name=salary" })
  salary?: EmployeeResultEmploymentSalary;
}

export enum EmployeeResultPersonContactEmailAddressTypeEnum {
    Home = "home",
    Work = "work"
}

export enum EmployeeResultPersonContactPreferredMethodEnum {
    Email = "email",
    HomePhone = "home-phone",
    Mail = "mail",
    Other = "other",
    WorkPhone = "work-phone"
}


// EmployeeResultPersonContact
/** 
 * Contact information for the person
**/
export class EmployeeResultPersonContact extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email_address" })
  emailAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=email_address_type" })
  emailAddressType?: EmployeeResultPersonContactEmailAddressTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=home_phone" })
  homePhone?: string;

  @SpeakeasyMetadata({ data: "json, name=preferred_language" })
  preferredLanguage?: string;

  @SpeakeasyMetadata({ data: "json, name=preferred_method" })
  preferredMethod?: EmployeeResultPersonContactPreferredMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=speaks_english" })
  speaksEnglish?: boolean;

  @SpeakeasyMetadata({ data: "json, name=work_phone" })
  workPhone?: string;
}

export enum EmployeeResultPersonDetailsAmericanIndianStateEnum {
    Ak = "AK",
    Al = "AL",
    Ar = "AR",
    As = "AS",
    Az = "AZ",
    Ca = "CA",
    Co = "CO",
    Ct = "CT",
    Dc = "DC",
    De = "DE",
    Fl = "FL",
    Fm = "FM",
    Ga = "GA",
    Gu = "GU",
    Hi = "HI",
    Ia = "IA",
    Id = "ID",
    Il = "IL",
    In = "IN",
    Ks = "KS",
    Ky = "KY",
    La = "LA",
    Ma = "MA",
    Md = "MD",
    Me = "ME",
    Mh = "MH",
    Mi = "MI",
    Mn = "MN",
    Mo = "MO",
    Mp = "MP",
    Ms = "MS",
    Mt = "MT",
    Nc = "NC",
    Nd = "ND",
    Ne = "NE",
    Nh = "NH",
    Nj = "NJ",
    Nm = "NM",
    Nv = "NV",
    Ny = "NY",
    Oh = "OH",
    Ok = "OK",
    Or = "OR",
    Pa = "PA",
    Pr = "PR",
    Pw = "PW",
    Ri = "RI",
    Sc = "SC",
    Sd = "SD",
    Tn = "TN",
    Tx = "TX",
    Um = "UM",
    Ut = "UT",
    Va = "VA",
    Vi = "VI",
    Vt = "VT",
    Wa = "WA",
    Wi = "WI",
    Wv = "WV",
    Wy = "WY"
}


// EmployeeResultPersonDetailsAmericanIndian
/** 
 * American Indian status details (if applicable)
**/
export class EmployeeResultPersonDetailsAmericanIndian extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: EmployeeResultPersonDetailsAmericanIndianStateEnum;

  @SpeakeasyMetadata({ data: "json, name=tribe" })
  tribe?: string;
}


// EmployeeResultPersonDetailsDisability
/** 
 * Disability details (if applicable)
**/
export class EmployeeResultPersonDetailsDisability extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=communication" })
  communication?: boolean;

  @SpeakeasyMetadata({ data: "json, name=disabled" })
  disabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason?: string;
}

export enum EmployeeResultPersonDetailsTobaccoTypesEnum {
    ChewingTobacco = "chewing-tobacco",
    Cigarettes = "cigarettes",
    Pipe = "pipe"
}


// EmployeeResultPersonDetailsTobacco
/** 
 * Tobacco usage details (if applicable)
**/
export class EmployeeResultPersonDetailsTobacco extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=duration" })
  duration?: string;

  @SpeakeasyMetadata({ data: "json, name=frequency" })
  frequency?: string;

  @SpeakeasyMetadata({ data: "json, name=types" })
  types?: EmployeeResultPersonDetailsTobaccoTypesEnum[];

  @SpeakeasyMetadata({ data: "json, name=user" })
  user?: boolean;
}


// EmployeeResultPersonDetails
/** 
 * Additional personal details of the person
**/
export class EmployeeResultPersonDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=american_indian" })
  americanIndian?: EmployeeResultPersonDetailsAmericanIndian;

  @SpeakeasyMetadata({ data: "json, name=disability" })
  disability?: EmployeeResultPersonDetailsDisability;

  @SpeakeasyMetadata({ data: "json, name=is_military" })
  isMilitary?: boolean;

  @SpeakeasyMetadata({ data: "json, name=is_student" })
  isStudent?: boolean;

  @SpeakeasyMetadata({ data: "json, name=tobacco" })
  tobacco?: EmployeeResultPersonDetailsTobacco;
}

export enum EmployeeResultPersonHomeAddressStateEnum {
    Ak = "AK",
    Al = "AL",
    Ar = "AR",
    As = "AS",
    Az = "AZ",
    Ca = "CA",
    Co = "CO",
    Ct = "CT",
    Dc = "DC",
    De = "DE",
    Fl = "FL",
    Fm = "FM",
    Ga = "GA",
    Gu = "GU",
    Hi = "HI",
    Ia = "IA",
    Id = "ID",
    Il = "IL",
    In = "IN",
    Ks = "KS",
    Ky = "KY",
    La = "LA",
    Ma = "MA",
    Md = "MD",
    Me = "ME",
    Mh = "MH",
    Mi = "MI",
    Mn = "MN",
    Mo = "MO",
    Mp = "MP",
    Ms = "MS",
    Mt = "MT",
    Nc = "NC",
    Nd = "ND",
    Ne = "NE",
    Nh = "NH",
    Nj = "NJ",
    Nm = "NM",
    Nv = "NV",
    Ny = "NY",
    Oh = "OH",
    Ok = "OK",
    Or = "OR",
    Pa = "PA",
    Pr = "PR",
    Pw = "PW",
    Ri = "RI",
    Sc = "SC",
    Sd = "SD",
    Tn = "TN",
    Tx = "TX",
    Um = "UM",
    Ut = "UT",
    Va = "VA",
    Vi = "VI",
    Vt = "VT",
    Wa = "WA",
    Wi = "WI",
    Wv = "WV",
    Wy = "WY"
}


// EmployeeResultPersonHomeAddress
/** 
 * Home address of the person
**/
export class EmployeeResultPersonHomeAddress extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=city" })
  city: string;

  @SpeakeasyMetadata({ data: "json, name=county" })
  county?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state: EmployeeResultPersonHomeAddressStateEnum;

  @SpeakeasyMetadata({ data: "json, name=street_one" })
  streetOne: string;

  @SpeakeasyMetadata({ data: "json, name=street_two" })
  streetTwo?: string;

  @SpeakeasyMetadata({ data: "json, name=zip_code" })
  zipCode: string;
}

export enum EmployeeResultPersonMailingAddressStateEnum {
    Ak = "AK",
    Al = "AL",
    Ar = "AR",
    As = "AS",
    Az = "AZ",
    Ca = "CA",
    Co = "CO",
    Ct = "CT",
    Dc = "DC",
    De = "DE",
    Fl = "FL",
    Fm = "FM",
    Ga = "GA",
    Gu = "GU",
    Hi = "HI",
    Ia = "IA",
    Id = "ID",
    Il = "IL",
    In = "IN",
    Ks = "KS",
    Ky = "KY",
    La = "LA",
    Ma = "MA",
    Md = "MD",
    Me = "ME",
    Mh = "MH",
    Mi = "MI",
    Mn = "MN",
    Mo = "MO",
    Mp = "MP",
    Ms = "MS",
    Mt = "MT",
    Nc = "NC",
    Nd = "ND",
    Ne = "NE",
    Nh = "NH",
    Nj = "NJ",
    Nm = "NM",
    Nv = "NV",
    Ny = "NY",
    Oh = "OH",
    Ok = "OK",
    Or = "OR",
    Pa = "PA",
    Pr = "PR",
    Pw = "PW",
    Ri = "RI",
    Sc = "SC",
    Sd = "SD",
    Tn = "TN",
    Tx = "TX",
    Um = "UM",
    Ut = "UT",
    Va = "VA",
    Vi = "VI",
    Vt = "VT",
    Wa = "WA",
    Wi = "WI",
    Wv = "WV",
    Wy = "WY"
}


// EmployeeResultPersonMailingAddress
/** 
 * Mailing address of the person
**/
export class EmployeeResultPersonMailingAddress extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=city" })
  city: string;

  @SpeakeasyMetadata({ data: "json, name=county" })
  county?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state: EmployeeResultPersonMailingAddressStateEnum;

  @SpeakeasyMetadata({ data: "json, name=street_one" })
  streetOne: string;

  @SpeakeasyMetadata({ data: "json, name=street_two" })
  streetTwo?: string;

  @SpeakeasyMetadata({ data: "json, name=zip_code" })
  zipCode: string;
}

export enum EmployeeResultPersonMaritalStatusEnum {
    Divorced = "divorced",
    DomesticPartner = "domestic-partner",
    LegallySeparated = "legally-separated",
    Married = "married",
    Single = "single",
    Widowed = "widowed"
}

export enum EmployeeResultPersonSexEnum {
    F = "F",
    M = "M",
    U = "U",
    X = "X"
}


// EmployeeResultPerson
/** 
 * Personal information for the employee
**/
export class EmployeeResultPerson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contact" })
  contact?: EmployeeResultPersonContact;

  @SpeakeasyMetadata({ data: "json, name=date_of_birth" })
  dateOfBirth: Date;

  @SpeakeasyMetadata({ data: "json, name=details" })
  details?: EmployeeResultPersonDetails;

  @SpeakeasyMetadata({ data: "json, name=first_name" })
  firstName: string;

  @SpeakeasyMetadata({ data: "json, name=home_address" })
  homeAddress?: EmployeeResultPersonHomeAddress;

  @SpeakeasyMetadata({ data: "json, name=last_name" })
  lastName: string;

  @SpeakeasyMetadata({ data: "json, name=mailing_address" })
  mailingAddress?: EmployeeResultPersonMailingAddress;

  @SpeakeasyMetadata({ data: "json, name=marital_status" })
  maritalStatus?: EmployeeResultPersonMaritalStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=middle_name" })
  middleName?: string;

  @SpeakeasyMetadata({ data: "json, name=sex" })
  sex: EmployeeResultPersonSexEnum;

  @SpeakeasyMetadata({ data: "json, name=ssn" })
  ssn?: string;

  @SpeakeasyMetadata({ data: "json, name=suffix" })
  suffix?: string;
}


export class EmployeeResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created" })
  created: number;

  @SpeakeasyMetadata({ data: "json, name=employment" })
  employment: EmployeeResultEmployment;

  @SpeakeasyMetadata({ data: "json, name=group_id" })
  groupId: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=modified" })
  modified: number;

  @SpeakeasyMetadata({ data: "json, name=person" })
  person: EmployeeResultPerson;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version: string;
}
